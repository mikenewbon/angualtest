import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlesComponent } from './components/articles/articles.component';

const routes: Routes = [
  { path:'', component:ArticlesComponent, pathMatch:'full'  },
  { path:'articles/:id', component:ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
