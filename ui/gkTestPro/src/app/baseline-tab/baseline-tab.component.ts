import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-baseline-tab',
  templateUrl: './baseline-tab.component.html',
  styleUrls: ['./baseline-tab.component.css']
})
export class BaselineTabComponent implements OnInit {

  @Input() title!: string;

  ngOnInit(): void {
      
  }

}
