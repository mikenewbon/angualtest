import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html'
})
export class ArticleItemComponent {
  @Input() article!: Article;
}
