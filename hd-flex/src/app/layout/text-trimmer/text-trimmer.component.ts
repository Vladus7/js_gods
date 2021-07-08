import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-trimmer',
  templateUrl: './text-trimmer.component.html',
  styleUrls: ['./text-trimmer.component.css']
})
export class TextTrimmerComponent implements OnInit {

  @Input('text') text: String;
  massage: String;
  isTextAll = false;
  isTextSoSmall = false;

  constructor() { }

  ngOnInit(): void {
    if (this.text.length <= 100) {
      this.isTextSoSmall = true;
      return;
    }
    this.massage = this.text.substring(0, 100);
  }

  showLess() {
    this.massage = this.text.substring(0, 100);
    this.isTextAll = false;
  }

  showMore() {
    this.massage = this.text;
    this.isTextAll = true;
  }
}
