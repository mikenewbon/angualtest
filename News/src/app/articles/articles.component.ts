import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ARTICLES } from '../mock_articles';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = ARTICLES;

  constructor() { }

  ngOnInit(): void {
  }

}
