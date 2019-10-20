import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-elipsis',
  templateUrl: './text-elipsis.component.html',
  styleUrls: ['./text-elipsis.component.scss']
})
export class TextElipsisComponent implements OnInit {
@Input() text: string;
@Input() num: number;

  constructor() {
  }

  ngOnInit() {
  }

}
