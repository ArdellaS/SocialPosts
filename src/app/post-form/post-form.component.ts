import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() submit: string;

  @Output() submitted = new EventEmitter<Post>();

  posts: Post[] = [];

  title: string = 's';
  thought: string = 's';

  constructor() {}

  ngOnInit(): void {
    this.title = 'title';
    this.thought = 'thought';

    this.posts = [
      {title: 'hey there', thought: 'Just chekcin in on you'},
      {title: 'Thar be pirates', thought: 'You just can\'t see them'},
    ]
  }

  
  deletePost(id:number):void{
    
    this.posts.splice(id,1);
  
  }

  submitPost = function (ev: Event) {
    let post = { title: this.title, thought: this.thought };
    console.log(post.title, post.thought);
    this.posts.push(post);

    this.submitted.emit(this.submit);
  };
}
