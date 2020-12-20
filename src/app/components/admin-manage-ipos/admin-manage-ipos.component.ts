import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/services/ipo.service';
import IPO from 'src/app/models/IPO';

@Component({
  selector: 'app-admin-manage-ipos',
  templateUrl: './admin-manage-ipos.component.html',
  styleUrls: ['./admin-manage-ipos.component.css']
})
export class AdminManageIposComponent implements OnInit {
  ipoObj: IPO;
  constructor(private ips: IpoService) {
    this.ipoObj = {
      companyCode: '',
      remarks: '',
      companyName: '',
      stockExchange: '',
      totalShares: 0,
      pricePerShare: 0,
      openDate: null
    };
  }

  ngOnInit(): void {}

  addIpo() {
    // console.log(this.ipoObj);
    this.ips.saveIpos(this.ipoObj).subscribe(
      data => {
        alert('IPO added successfully!!');
        this.ipoObj = {
          companyCode: '',
          remarks: '',
          companyName: '',
          stockExchange: '',
          totalShares: 0,
          pricePerShare: 0,
          openDate: null
        };
      },
      err => {
        console.log('Error adding IPO');
        console.log(err);
      }
    );
  }
}
