import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  @Input() posts: string[];
  @Output() onRemoveColor = new EventEmitter<any>();
  @Output() onAddColor = new EventEmitter<any>();
  
  // parent

  posts: string[] = [
    "Lorem ipsum dolor sit amet, modus diceret eu sit, id tritani sententiae dissentias "
    "Lorem ipsum dolor sit amet, modus diceret eu sit, id tritani sententiae dissentias ",
    "Lorem ipsum dolor sit amet, modus diceret eu sit, id tritani sententiae dissentias ",
    "Lorem ipsum dolor sit amet, modus diceret eu sit, id tritani sententiae dissentias ",
    "Blue",
    "Indigo",
    "Violet"
  ];



    

  constructor() { }

  removeColor(index: number): void {
    console.log(index);
    this.onRemoveColor.emit(index);
    
  }

  addColor(form): void {
    this.onAddColor.emit(form.value.colorToAdd);
  }

  //parent 

  addColor(color: string) {
    console.log(color);
    this.colors.push(color);
    
  }

  removeColor(index: number): void {
    console.log(index);
    this.colors.splice(index, 1);
    
  }


  ngOnInit() {
  }

}
