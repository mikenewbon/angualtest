import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
