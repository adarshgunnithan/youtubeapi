import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyCeHVGEV0hEeqXOSn1xAURfnPC_iY-Zfv8';

  constructor(public http: HttpClient) { }

    getVideosForChanel(channel, maxResults): Observable<Object> {
    //let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    let url='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=wolverine&key=AIzaSyCeHVGEV0hEeqXOSn1xAURfnPC_iY-Zfv8'
    
    return this.http.get(url)
      .pipe(map((res) => {
        console.log("responnse is"+res)
        return res;
      }))
  }
}