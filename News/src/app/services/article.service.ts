import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../Article';
import { ARTICLES } from '../mock_articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles = of(ARTICLES);
    return articles;
  }
}
