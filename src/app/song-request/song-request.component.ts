import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongRequestService } from '../services/songRequest.service';

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.css']
})
export class SongRequestComponent implements OnInit {
  formInfo: any = {song: ''}

  constructor(
    private songRequestService: SongRequestService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitSong() {
    this.songRequestService.submitSong(this.formInfo)
    .subscribe(() => {
      this.formInfo = {};
    });
  }

}
