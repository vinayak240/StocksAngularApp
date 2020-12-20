import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import * as XL from 'xlsx';

@Component({
  selector: 'app-admin-upload-data',
  templateUrl: './admin-upload-data.component.html',
  styleUrls: ['./admin-upload-data.component.css']
})
export class AdminUploadDataComponent implements OnInit {
  data: any = null;
  constructor(private us: UploadService) {}

  ngOnInit(): void {}

  fileSelected($event) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      const workbook = XL.read(reader.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XL.utils.sheet_to_json(sheet);
      this.data = json;
    };
    reader.readAsBinaryString(file);
  }

  upload() {
    this.us.uploadStocks(this.data).subscribe(
      res => {
        alert('Upload Successful');
      },
      err => {
        console.log('Error Uploading Stocks');
        console.log(err);
      }
    );
  }
}
