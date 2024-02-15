import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getJSONPlaceholder(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getNews(): Observable<any> {
    return this.httpClient.get(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-01-15&sortBy=publishedAt&apiKey=f288b14c78f04db9a0ed0cfc28ba8deb'
    );
  }
}
