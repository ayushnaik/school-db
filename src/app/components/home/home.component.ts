import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigateStf() {
        this.router.navigate(['/students-form']);
  }

  navigateSuf() {
        this.router.navigate(['/subjects-form']);
  }

  navigateTef() {
        this.router.navigate(['/teachers-form']);
  }

}
