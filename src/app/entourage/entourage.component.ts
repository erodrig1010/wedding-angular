import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entourage',
  templateUrl: './entourage.component.html',
  styleUrls: ['./entourage.component.css']
})
export class EntourageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
