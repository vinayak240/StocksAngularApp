import { Component, OnInit } from '@angular/core';
import { ExchangeServiceService } from 'src/app/services/exchange-service.service';
import { CompanyService } from 'src/app/services/company.service';
import Exchange from 'src/app/models/Exchange';

@Component({
  selector: 'app-admin-manage-exchanges',
  templateUrl: './admin-manage-exchanges.component.html',
  styleUrls: ['./admin-manage-exchanges.component.css']
})
export class AdminManageExchangesComponent implements OnInit {
  exchanges: any = [];
  exchangeObj: any;
  constructor(private es: ExchangeServiceService, private cs: CompanyService) {
    this.exchangeObj = {
      name: '',
      description: '',
      address: '',
      remarks: ''
    };
  }

  ngOnInit(): void {
    this.es.getExchanges().subscribe(
      data => {
        this.exchanges = data;
        this.exchanges = this.exchanges.map(exchange => {
          this.es.getExchangeCompanies(exchange.name).subscribe(
            data => {
              exchange.companies = data;
              // console.log('Here ', exchange);
            },
            err => {
              console.log('Error fetching Companies / Exchange Service');
              console.log(err);
            }
          );
          return exchange;
        });
      },
      err => {
        console.log('Error fetching Exchanges');
        console.log(err);
      }
    );
  }

  addExchange() {
    this.es.saveExchanges(this.exchangeObj).subscribe(
      res => {
        alert('Stock Exchange Added Successfully!!');
        this.es.getExchanges().subscribe(
          data => {
            this.exchanges = data;
            this.exchanges = this.exchanges.map(exchange => {
              this.es.getExchangeCompanies(exchange.name).subscribe(
                data => {
                  exchange.companies = data;
                  // console.log('Here ', exchange);
                },
                err => {
                  console.log('Error fetching Companies / Exchange Service');
                  console.log(err);
                }
              );
              return exchange;
            });
          },
          err => {
            console.log('Error fetching Exchanges');
            console.log(err);
          }
        );
      },
      err => {
        console.log('Error adding stock exchange');
        console.log(err);
      }
    );
  }
}
