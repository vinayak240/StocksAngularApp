import { Component, OnInit } from '@angular/core';
import { SectorServiceService } from 'src/app/services/sector-service.service';
import { CompanyService } from 'src/app/services/company.service';
// import { ChartOptions, ChartType} from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-user-compare',
  templateUrl: './user-compare.component.html',
  styleUrls: ['./user-compare.component.css']
})
export class UserCompareComponent implements OnInit {
  compareType = 'company';
  isLoading = false;
  name1 = '';
  name2 = '';
  from = '';
  to = '';
  period = 'daily';
  public datasets: any = [];
  chartType = 'bar';
  public layout = {
    xaxis: {
      type: 'date',
      title: 'Stock Price Dates'
    },
    yaxis: {
      title: 'Stock Prices'
    },
    title: 'Stock Price Analysis'
  };
  constructor(private ss: SectorServiceService, private cs: CompanyService) {}

  ngOnInit(): void {
    // datasets = [...datasets, trace1];
  }

  processData(sectName: string, period: string, obj: any) {
    let dateArr = obj.map(stk => stk.date.split('T')[0]);
    // console.log(dateArr);

    dateArr = new Set(dateArr);
    dateArr = Array.from(dateArr);
    let resList;
    switch (period) {
      case 'daily':
        resList = dateArr;
        resList = resList.map(dt => {
          let lst = obj.filter(stk => stk.date.split('T')[0] === dt);
          let exc = lst.map(stk => stk.stockExchange);
          exc = exc.join(',');
          let sectorName = sectName;
          let price = lst.reduce((total, ele) => total + ele.price, 0);
          price = price / lst.length;

          return {
            stockExchange: exc,
            sectorName: sectorName,
            price: price,
            date: dt
          };
        });

        break;

      case 'monthly':
        resList = dateArr;
        resList = resList.map(dt1 => {
          let str1 = dt1.split('-');
          str1[2] = '01';
          str1 = str1.join('-');

          return str1;
        });
        resList = new Set(resList);
        resList = Array.from(resList);
        resList = resList.map(dt => {
          let lst = obj.filter(stk => {
            let d1 = new Date(stk.date.split('T')[0]);
            let d2 = new Date(dt);
            let flag =
              d1.getFullYear() === d2.getFullYear() &&
              d1.getMonth() === d2.getMonth();

            return flag;
          });
          let exc = lst.map(stk => stk.stockExchange);
          exc = exc.join(',');
          let sectorName = sectName;
          let price = lst.reduce((total, ele) => total + ele.price, 0);
          price = price / lst.length;
          return {
            stockExchange: exc,
            sectorName: sectorName,
            price: price,
            date: dt
          };
        });

        break;

      case 'yearly':
        resList = dateArr;
        resList = resList.map(dt1 => {
          let str1 = dt1.split('-');
          str1[2] = '01';
          str1[1] = '01';
          str1 = str1.join('-');

          return str1;
        });
        resList = new Set(resList);
        resList = Array.from(resList);

        resList = resList.map(dt => {
          let lst = obj.filter(stk => {
            let d1 = new Date(stk.date.split('T')[0]);
            let d2 = new Date(dt);
            let flag = d1.getFullYear() === d2.getFullYear();

            return flag;
          });
          let exc = lst.map(stk => stk.stockExchange);
          exc = exc.join(',');
          let sectorName = sectName;

          let price = lst.reduce((total, ele) => total + ele.price, 0);
          price = price / lst.length;

          return {
            stockExchange: exc,
            sectorName: sectorName,
            price: price,
            date: dt
          };
        });

        break;

      default:
        return [];
        break;
    }

    let trace = {
      x: resList.map(stk => stk.date) as string[],
      y: resList.map(stk => Math.round(stk.price)) as number[],
      mode: 'lines+markers',
      name: sectName,
      fill: 'tozeroy',
      type: this.chartType
    };
    console.log('trace here ', trace);

    return trace;
  }

  compare() {
    this.isLoading = true;
    let req =
      this.compareType === 'company' || this.compareType === 'company/company'
        ? this.cs.getCompanyStocksPrice(
            this.name1,
            this.from,
            this.to,
            this.period
          )
        : this.ss.getSectorStocksPrice(
            this.name1,
            this.from,
            this.to,
            this.period
          );

    req.subscribe(
      data => {
        console.log('Entity 1', data);
        let o1 = this.processData(this.name1, this.period, data);
        this.datasets[0] = { ...o1 };
        this.isLoading = false;

        if (this.compareType === 'company/company') {
          this.isLoading = true;

          this.cs
            .getCompanyStocksPrice(this.name2, this.from, this.to, this.period)
            .subscribe(
              data1 => {
                let o2 = this.processData(this.name2, this.period, data1);
                this.datasets[1] = { ...o2 };
                this.isLoading = false;

                console.log('Entity 2', data1);
                // this.datasets.push(
                //   this.processData(this.name2, this.period, data1)
                // );
              },
              err => {
                console.log('Error fetching Stocks for company');
                console.log(err);
              }
            );
        } else if (this.compareType === 'sector/sector') {
          this.ss
            .getSectorStocksPrice(this.name2, this.from, this.to, this.period)
            .subscribe(
              data2 => {
                let o3 = this.processData(this.name2, this.period, data2);
                this.datasets[1] = { ...o3 };
                // this.isLoading = false;
                this.isLoading = false;

                console.log('Entity 2', data2);
                // this.datasets.push(
                //   this.processData(this.name2, this.period, data2)
                // );
              },
              err => {
                console.log('Error fetching Stocks for sector');
                console.log(err);
              }
            );
        }
      },
      err => {
        console.log('Error fetching Stocks');
        console.log(err);
      }
    );
  }
}
