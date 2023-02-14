import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(private activatedRoute: ActivatedRoute) { }

  get page() {
    return this.activatedRoute.snapshot.queryParams['page'];
  }

  get orderBy() {
    return this.activatedRoute.snapshot.queryParams['orderBy'];
  }

  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo quam voluptate nemo commodi, amet repellat? Mollitia perspiciatis laboriosam, rem impedit recusandae, fugit ex modi minus laborum excepturi qui sapiente."
    },
    {
      id: 2,
      title: "Title 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo quam voluptate nemo commodi, amet repellat? Mollitia perspiciatis laboriosam, rem impedit recusandae, fugit ex modi minus laborum excepturi qui sapiente."
    },
    {
      id: 3,
      title: "Title 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo quam voluptate nemo commodi, amet repellat? Mollitia perspiciatis laboriosam, rem impedit recusandae, fugit ex modi minus laborum excepturi qui sapiente."
    },
  ]

  ngOnInit(): void {
    console.log(this.page)
    console.log(this.orderBy)
  }

}
