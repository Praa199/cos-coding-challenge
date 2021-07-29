import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  posts:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data)=>this.displayPost(data));    
  }

  displayPost(data:any)
  {
    this.posts = data;
  }

}
