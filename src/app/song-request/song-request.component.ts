import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongRequestService } from '../services/songRequest.service';
declare var $: any;

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.css']
})
export class SongRequestComponent implements OnInit, AfterViewInit {
  formInfo: any = {song: ''}

  constructor(
    private songRequestService: SongRequestService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/js/glanz_script.js');
  }

  submitSong() {
    this.songRequestService.submitSong(this.formInfo)
    .subscribe(() => {
      this.formInfo = {};
    });
  }

}
