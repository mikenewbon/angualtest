import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(
    private route:ActivatedRoute,
    private ArticleService:ArticleService
    ) { }

  ngOnInit(): void {
    this.loadArticle();
  }

  loadArticle(){
    const articleId: number = +this.route.snapshot.paramMap.get('id')!;
    this.ArticleService.getById(articleId).subscribe(
      (article) => this.article = article
    )
  }
}
