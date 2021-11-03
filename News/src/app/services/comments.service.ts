import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Comment';

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
}
