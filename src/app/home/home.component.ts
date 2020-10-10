import { Component, OnInit } from '@angular/core';
import { GetdatascraperService } from '../getdatascraper.service';
import { Manga } from '../Manga';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mangas: Manga;

  constructor(private getdata: GetdatascraperService) { }

  ngOnInit(): void {
    this.getdata.getHomedata().subscribe(Response => {
      this.mangas = Response;
      console.log(this.mangas)

    });

  }
}
