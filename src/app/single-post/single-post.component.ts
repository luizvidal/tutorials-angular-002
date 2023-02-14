import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  get id() {
    return this.activatedRoute.snapshot.params['id'];
  }

  get title() {
    return this.activatedRoute.snapshot.params['title'];
  }
  
  get content() {
    return this.activatedRoute.snapshot.params['content'];
    
  }

  ngOnInit(): void {
    console.log(this.title)
  }
}
