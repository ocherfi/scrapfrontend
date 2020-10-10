import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{API_HOME_URL} from './app-constant';
import { Manga } from './Manga';

@Injectable({
  providedIn: 'root'
})
export class GetdatascraperService {

  constructor(private http: HttpClient) { }

  getHomedata(){
    return this.http.get<Manga>(`${API_HOME_URL}/scrap`);
  }
}
