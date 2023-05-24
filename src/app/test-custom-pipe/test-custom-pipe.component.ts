import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-custom-pipe',
  templateUrl: './test-custom-pipe.component.html',
  styleUrls: ['./test-custom-pipe.component.css']
})
export class TestCustomPipeComponent implements OnInit {
  fValue:number
  cValue:number
unit: String;
  constructor() { }

  ngOnInit(): void {
  }

}
