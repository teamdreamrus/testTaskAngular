import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-text-elipsis',
  templateUrl: './text-elipsis.component.html',
  styleUrls: ['./text-elipsis.component.scss']
})
export class TextElipsisComponent implements OnInit, OnChanges {
@Input() text: string;
@Input() num: number;
count: number;

  constructor() {
  }
ngOnChanges(changes: SimpleChanges): void {
  this.count = this.text.split(/\r|\r\n|\n/).length;
  }

  ngOnInit() {
  }

}
