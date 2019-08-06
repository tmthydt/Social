import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {


  @Output() onAddPost = new EventEmitter<any>();
  @Output() onDisplayForm = new EventEmitter<any>();

  constructor() { }

  addPost(form): void {
    // console.log(form);
    this.onAddPost.emit(form);
    this.displayForm();
  }

  displayForm(): void {
    this.onDisplayForm.emit();
  }

  ngOnInit() {
  }

}
