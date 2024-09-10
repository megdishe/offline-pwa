import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() title: any;
  @Input() content: any;
}
