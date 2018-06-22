import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.css']
})
export class SongRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refresh(): void {
    window.location.reload();
  }

}
