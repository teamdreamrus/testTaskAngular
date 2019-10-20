import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  text = '';
  num = 0;
  appTitle = 'angular test task';
  inputText(event: any) {
    this.text = event.target.value;
  }
  inputNumber(event: any) {
    this.num = event.target.value;
  }
}
