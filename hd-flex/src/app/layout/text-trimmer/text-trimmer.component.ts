import {Component, Input, OnInit} from '@angular/core';

const SHORT = 'short';
const LONG = 'long';
const ALWAYS_SHORT = 'always_short'

@Component({
  selector: 'app-text-trimmer',
  templateUrl: './text-trimmer.component.html',
  styleUrls: ['./text-trimmer.component.css']
})
export class TextTrimmerComponent implements OnInit {

  @Input('text') text: String;
  massage: String;
  textType = SHORT;

  constructor() { }

  ngOnInit(): void {
    if (this.text.length <= 100) {
      this.textType = ALWAYS_SHORT;
      return;
    }
    this.massage = this.text.substring(0, 100);
  }

  lengthSwitch(): void{
    if(this.textType === SHORT){
      this.textType = LONG;
      this.massage = this.text;
      return;
    }
    this.textType = SHORT;
    this.massage = this.text.substring(0, 100);
  }
}
