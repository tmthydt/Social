import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  visible: boolean = true;

  postList: Posts[] = [
    {
      title: "My First Post",
      thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet. "
    },
    {
      title: "My Second Post",
      thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet. "
    }
  ];


  constructor() { }

  addPost(form): void {
    this.postList.unshift(form.value);
  }

  removePost(index: number): void {
    // console.log(index);
    this.postList.splice(index, 1);
  }

  displayForm(): void {
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
