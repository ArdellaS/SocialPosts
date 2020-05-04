import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:Post[];

  constructor() { }


  ngOnInit(): void {
    this.posts = [
      {title: 'hey there', thought: 'Just chekcin in on you'},
      {title: 'Thar be pirates', thought: 'You just can\'t see them'},
    ]
  }

}
