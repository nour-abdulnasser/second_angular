import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  news: News[] = [];
  isLoading:boolean = true;  // make default true bc once we start page it is loading
  constructor(_newsService: NewsService) {
    // _newsService.getJSONPlaceholder().subscribe((data:any) => {
    //   console.log(data);
    // });

    _newsService.getNews().subscribe({
      next: (data) => {
        // success
        console.log(data);
        this.news = data.articles;
        this.isLoading = false;

      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
