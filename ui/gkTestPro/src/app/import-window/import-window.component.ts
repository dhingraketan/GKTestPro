import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { ApiServiceService } from '../api-service.service';

const URL = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.IMPORT_TEST_CASES;
@Component({
  selector: 'app-import-window',
  templateUrl: './import-window.component.html',
  styleUrls: ['./import-window.component.css']
})
export class ImportWindowComponent {

  constructor(private apiService: ApiServiceService) { }

  uploadedFile: File | null = null;

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.uploadedFile = fileList[0];
    }
  }

  uploadFile(): void {
    if (this.uploadedFile) {
      //check if it is an xml file
      if (this.uploadedFile.type !== 'text/xml') {
        alert('Please upload a valid xml file');
        this.uploadedFile = null;
      } else {
        this.apiService.importTestCases(this.uploadedFile).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
