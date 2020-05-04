import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
@Input() submitted:string;
@Input() deleted:boolean;
@Output() submitOutput = new EventEmitter<string>();
@Output() deleteOutput = new EventEmitter<boolean>();

  posts:Post[];


  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {title: 'hey there', thought: 'Just chekcin in on you'},
      {title: 'Thar be pirates', thought: 'You just can\'t see them'},
    ]
  }

  onSumbit = function(){

    this.submitOutput.emit(this.submitted);
  }
  onDelete = function(){

    this.deleteOutput.emit(this.deleted);
  }

  deletePost(id:number):void{
    
    this.posts.splice(id,1);
  
  }
  

}
