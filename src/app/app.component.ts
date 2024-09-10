import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Post} from "./post.model";
import {HttpClient} from "@angular/common/http";
import {PostComponent} from "./post/post.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwa';
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
