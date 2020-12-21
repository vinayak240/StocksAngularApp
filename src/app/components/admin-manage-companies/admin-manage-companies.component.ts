import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import Company from 'src/app/models/Company';
import { SectorServiceService } from 'src/app/services/sector-service.service';
import { ExchangeServiceService } from 'src/app/services/exchange-service.service';

@Component({
  selector: 'app-admin-manage-companies',
  templateUrl: './admin-manage-companies.component.html',
  styleUrls: ['./admin-manage-companies.component.css']
})
export class AdminManageCompaniesComponent implements OnInit {
  companies: any = [];
  isEdit: any = [];
  ComObj: any;
  searchText = '';
  objList: any = [];
  isLoading = false;
  sectors: any = [];
  exchanges: any = [];

  constructor(
    private cs: CompanyService,
    private ss: SectorServiceService,
    private es: ExchangeServiceService
  ) {
    this.ComObj = {
      companyCode: '',
      name: '',
      ceo: '',
      boardOfDirectors: '',
      description: '',
      turnover: 0,
      sectorName: '',
      stockExchanges: []
    };
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.cs.getCompanies().subscribe(
      data => {
        // console.log(data);

        this.es.getExchanges().subscribe(
          data => {
            this.exchanges = data;
            this.ss.getSectors().subscribe(
              data => {
                this.sectors = data;
                this.isLoading = false;
              },
              err => {
                console.log('Error fetching Sectors');
                console.log(err);
              }
            );
          },
          err => {
            console.log('Error fetching Exchanges');
            console.log(err);
          }
        );

        this.objList = data;
        this.companies = data;
        this.companies = this.companies.map(com => {
          let ex = com.stockExchanges.split(',');
          com.stockExchanges = ex;
          return com;
        });
        this.isEdit = Array.from(
          { length: this.companies.length },
          (cal, idx) => false
        );

        this.isLoading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  addCompany() {
    // console.log('Here', this.ComObj);
    this.ComObj.stockExchanges = this.ComObj.stockExchanges.join(',');
    this.cs.saveCompany(this.ComObj).subscribe(
      data => {
        this.ComObj.stockExchanges = this.ComObj.stockExchanges.split(',');
        alert('Added new company successfully');
        this.refresh();
      },
      err => {
        console.log('Error saving Company');
        console.log(err);
      }
    );
  }

  onChangeEdit(i: number) {
    this.isEdit[i] = !this.isEdit[i];
  }

  update(i: number) {
    this.isLoading = true;
    let obj = this.companies;
    this.companies[i].stockExchanges = this.companies[i].stockExchanges.join(
      ','
    );

    this.cs
      .updateCompany(this.companies[i].companyCode, this.companies[i])
      .subscribe(
        data => {
          // console.log(data);

          this.companies[i].stockExchanges = this.companies[
            i
          ].stockExchanges.split(',');
          this.isEdit[i] = false;
          this.isLoading = false;
          alert('Company Updated Successfully!!');
        },
        err => {
          console.log(err);
        }
      );
  }

  filter() {
    console.log(this.searchText);

    this.companies = this.objList.filter(com =>
      com.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log(this.companies);
  }

  refresh() {
    this.isLoading = true;
    this.cs.getCompanies().subscribe(
      data => {
        // console.log(data);
        this.objList = data;
        this.companies = data;
        this.companies = this.companies.map(com => {
          let ex = com.stockExchanges.split(',');
          com.stockExchanges = ex;
          return com;
        });
        this.isEdit = Array.from(
          { length: this.companies.length },
          (cal, idx) => false
        );
        this.isLoading = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
