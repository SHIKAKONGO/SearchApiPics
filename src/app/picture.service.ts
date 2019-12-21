import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private KEY = '13549867-584794b627bfe2c594aa1b90f';
  private URl = 'https://pixabay.com/api/?key=';
  private KEYURL: string = this.URl + this.KEY + '&q=';
  private page = '&per_page=24';

  constructor(private http: HttpClient) { }

  getPics(query): Observable<any> {
    return this.http.get(this.KEYURL + query + this.page).pipe(map( result => result));
  }
}
