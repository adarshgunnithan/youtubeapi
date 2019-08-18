import { Component } from '@angular/core';
import {YoutubeService} from '../app/youtube.service'
import { NgxSpinnerService } from "ngx-spinner";
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-api';

  videos: any[];

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService,private sanitizer: DomSanitizer) { }


 
  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
    this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
    .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)

    .subscribe(lista => {
    for (let element of lista["items"]) {
      
      let urlData="https://www.youtube.com/embed/"+element.id.videoId;
      element.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlData);
    this.videos.push(element)
    }
    });
    }
}
