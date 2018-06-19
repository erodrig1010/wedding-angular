import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SongRequestService {

  constructor(private myHttp: Http) { }

  createNewRequest(theWholeRequestObject) {
    return this.myHttp.post(`http://localhost:3000/song-request`, theWholeRequestObject)
    .map((responseFromApi) => responseFromApi.json());
  }

}
