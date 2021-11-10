import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html'
})

export class CommentAddComponent {
  @Output() onComment: EventEmitter<Comment> = new EventEmitter();

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute) { }

  onSubmit() {
    const articleId: number = +this.route.snapshot.paramMap.get('id')!;
    const newComment = {
      articleId: articleId,
      name: this.name,
      email: this.email,
      message: this.message
    }

    this.onComment.emit(newComment);

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
