import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})

export class CommentAddComponent implements OnInit {
  @Output() onComment: EventEmitter<Comment> = new EventEmitter();

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const articleId: number = +this.route.snapshot.paramMap.get('id')!;
    const newComment = {
      name: this.name,
      email: this.email,
      message: this.message,
      id: undefined,
      articleId: articleId
    }

    // this.onComment.emit(newComment);

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
