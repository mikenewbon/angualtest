import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiURL = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiURL)
  }
}
