import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html'
})
export class CommentItemComponent {
  @Input() comment!: Comment;

}
