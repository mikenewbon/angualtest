import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    CommentSectionComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
