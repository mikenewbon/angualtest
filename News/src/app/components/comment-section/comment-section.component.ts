import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})

export class CommentSectionComponent implements OnInit {
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commentSerivce: CommentsService
  ) { }

  ngOnInit(): void {
    const articleId: number = +this.route.snapshot.paramMap.get('id')!;
    this.commentSerivce.getCommentsbyId(articleId).subscribe(
      (comments) => this.comments = comments
    )
  }

  comment(comment: Comment) {

  }
}
