import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
