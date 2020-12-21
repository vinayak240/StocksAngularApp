import { Component, OnInit } from '@angular/core';
import { SectorServiceService } from 'src/app/services/sector-service.service';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  obj: any = [];
  ipoList: any = [];

  constructor(private is: IpoService) {}

  ngOnInit(): void {}

  getStocks() {
    this.is.getIpos().subscribe(
      data => {
        console.log(data);
        this.ipoList = data;
        this.obj = data;
      },
      err => {
        console.log('Error Fetching Stocks Prices');
        console.log(err);
      }
    );
  }

  // processData(sectName: string, period: string, obj: any) {
  //   let dateArr = obj.map(stk => stk.date.split('T')[0]);
  //   // console.log(dateArr);

  //   dateArr = new Set(dateArr);
  //   dateArr = Array.from(dateArr);
  //   let resList;
  //   switch (period) {
  //     case 'daily':
  //       resList = dateArr;
  //       resList = resList.map(dt => {
  //         let lst = obj.filter(stk => stk.date.split('T')[0] === dt);
  //         let exc = lst.map(stk => stk.stockExchange);
  //         exc = exc.join(',');
  //         let sectorName = sectName;
  //         let price = lst.reduce((total, ele) => total + ele.price, 0);
  //         price = price / lst.length;

  //         return {
  //           stockExchange: exc,
  //           sectorName: sectorName,
  //           price: price,
  //           date: dt
  //         };
  //       });

  //       return resList;

  //       break;

  //     case 'monthly':
  //       resList = dateArr;
  //       resList = resList.map(dt1 => {
  //         let str1 = dt1.split('-');
  //         str1[2] = '01';
  //         str1 = str1.join('-');

  //         return str1;
  //       });
  //       resList = new Set(resList);
  //       resList = Array.from(resList);
  //       resList = resList.map(dt => {
  //         let lst = obj.filter(stk => {
  //           let d1 = new Date(stk.date.split('T')[0]);
  //           let d2 = new Date(dt);
  //           let flag =
  //             d1.getFullYear() === d2.getFullYear() &&
  //             d1.getMonth() === d2.getMonth();

  //           return flag;
  //         });
  //         let exc = lst.map(stk => stk.stockExchange);
  //         exc = exc.join(',');
  //         let sectorName = sectName;
  //         let price = lst.reduce((total, ele) => total + ele.price, 0);
  //         price = price / lst.length;
  //         return {
  //           stockExchange: exc,
  //           sectorName: sectorName,
  //           price: price,
  //           date: dt
  //         };
  //       });

  //       return resList;
  //       break;

  //     case 'yearly':
  //       resList = dateArr;
  //       resList = resList.map(dt1 => {
  //         let str1 = dt1.split('-');
  //         str1[2] = '01';
  //         str1[1] = '01';
  //         str1 = str1.join('-');

  //         return str1;
  //       });
  //       resList = new Set(resList);
  //       resList = Array.from(resList);

  //       resList = resList.map(dt => {
  //         let lst = obj.filter(stk => {
  //           let d1 = new Date(stk.date.split('T')[0]);
  //           let d2 = new Date(dt);
  //           let flag = d1.getFullYear() === d2.getFullYear();

  //           return flag;
  //         });
  //         let exc = lst.map(stk => stk.stockExchange);
  //         exc = exc.join(',');
  //         let sectorName = sectName;

  //         let price = lst.reduce((total, ele) => total + ele.price, 0);
  //         price = price / lst.length;

  //         return {
  //           stockExchange: exc,
  //           sectorName: sectorName,
  //           price: price,
  //           date: dt
  //         };
  //       });

  //       return resList;
  //       break;

  //     default:
  //       break;
  //   }
  // }
}
