import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty object
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // console.log(this.doThis(7));
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
      console.log(this.posts)
    }, error => {console.log('error');},
      () => console.log('finished'));
  }

  // doThat(y){
  //   return y + 3;
  // }
  // doThis(x){
  //   let n = this.doThat(x);
  //   return n + 5;
  // }
}
