import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  protected giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  protected giphyApiKey = 'mC1I31bn26dUuhDoRDS1PF9QeksY3OA8';

  constructor(protected http: HttpClient) { }

  getImage(query): Observable<any> {
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${query}`;
    return this.http.get(requestURL);
  }
}
