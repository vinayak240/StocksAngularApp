import { Component, OnInit } from '@angular/core';
import { SectorServiceService } from 'src/app/services/sector-service.service';

@Component({
  selector: 'app-admin-manage-sectors',
  templateUrl: './admin-manage-sectors.component.html',
  styleUrls: ['./admin-manage-sectors.component.css']
})
export class AdminManageSectorsComponent implements OnInit {
  sectors: any = [];
  sectorObj: any;
  constructor(private SectService: SectorServiceService) {
    this.sectorObj = {
      name: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.SectService.getSectors().subscribe(
      data => {
        this.sectors = data;
        this.sectors = this.sectors.map(sect => {
          this.SectService.getSectorCompanies(sect.name).subscribe(
            data => {
              sect.companies = data;
            },
            err => {
              console.log('Error fetching Companies / Sector Service');
              console.log(err);
            }
          );
          return sect;
        });
      },
      err => {
        console.log('Error fetching Sectors');
        console.log(err);
      }
    );
  }

  addSector() {
    this.SectService.saveSectors(this.sectorObj).subscribe(
      res => {
        alert('Sector added Successfully');
        this.SectService.getSectors().subscribe(
          data => {
            this.sectors = data;
            this.sectors = this.sectors.map(sect => {
              this.SectService.getSectorCompanies(sect.name).subscribe(
                data => {
                  sect.companies = data;
                },
                err => {
                  console.log('Error fetching Companies / Sector Service');
                  console.log(err);
                }
              );
              return sect;
            });
          },
          err => {
            console.log('Error fetching Sectors');
            console.log(err);
          }
        );
      },
      err => {
        console.log('Error saving Sector');
        console.log(err);
      }
    );
  }
}
