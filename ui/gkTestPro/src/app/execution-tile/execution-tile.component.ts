import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-execution-tile',
  templateUrl: './execution-tile.component.html',
  styleUrls: ['./execution-tile.component.css']
})
export class ExecutionTileComponent implements OnInit {

  @Input() execution: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
