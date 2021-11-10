import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getById(id:number):Observable<object>{
    const idUrl = `${this.apiURL}/${id}`;
    return this.http.get(idUrl);
  }
}
