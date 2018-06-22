import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private route: ActivatedRoute, private router: Router ) {}
  title = 'Yani and Brian 2019';

  refresh(): void {
    window.location.reload();
  }
}
