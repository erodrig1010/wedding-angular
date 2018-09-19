import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SongRequestService {

  constructor(private myHttp: Http) { }

  submitSong(theSong) {
    return this.myHttp.post(`${environment.apiUrl}/song-request`, theSong)
    .map((responseFromApi) => responseFromApi.json());
  }

}
