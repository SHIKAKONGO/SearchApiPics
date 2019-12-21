import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-pixapi',
  templateUrl: './pixapi.component.html',
  styleUrls: ['./pixapi.component.css']
})
export class PixapiComponent implements OnInit {

  searchQueary: any;

  constructor(private picture: PictureService) { }
  images: any[];
  searchImg(query: string) {
    return this.picture.getPics(query).subscribe( data => {
      this.images = data.hits;
    });
  }

  ngOnInit() {
  }

}
