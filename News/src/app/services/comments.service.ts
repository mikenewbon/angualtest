import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Comment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentApiURL = "http://localhost:5000/comments"

  constructor(private http:HttpClient) { }

  getCommentsbyId(articleId:number): Observable<Comment[]> {
    const commentsURL = `${this.commentApiURL}?articleId=${articleId}`
    return this.http.get<Comment[]>(commentsURL)
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentApiURL, comment, httpOptions);
  }
}
