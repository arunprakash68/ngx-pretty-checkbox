import { Component, OnInit } from '@angular/core';
import { NgxPrettyCheckboxComponent } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-states',
  templateUrl: './demo-states.component.html',
  styleUrls: ['./demo-states.component.css']
})
export class DemoStatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setIndeterminate( prettyCheckbox: NgxPrettyCheckboxComponent) {
    prettyCheckbox.setIndeterminate();
  }

}
