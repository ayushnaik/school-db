import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'school';
  @Output() public sidenavClose = new EventEmitter();

  constructor(private router: Router) { }
   ngOnInit() {
   }

  public onSidenavClose = () => {
  }
}
