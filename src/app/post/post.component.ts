import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Posts[];
  @Input() index: number;
  @Output() onRemovePost = new EventEmitter<any>();

  constructor() { }

  like: number = 0;

  removePost(index) {
    this.onRemovePost.emit(index);
  }

  likeVote(): void {
    this.like++;
  }

  ngOnInit() {
  }

}
