import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-entourage',
  templateUrl: './entourage.component.html',
  styleUrls: ['./entourage.component.css']
})
export class EntourageComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/js/glanz_script.js');
  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
