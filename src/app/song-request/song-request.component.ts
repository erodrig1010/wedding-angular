import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.css']
})
export class SongRequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
