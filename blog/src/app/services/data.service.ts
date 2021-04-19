import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://blogtai.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url+'/api/posts/');
  }

  getById(id: number) {
          return this.http.get(this.url + '/api/posts/' + id);
  }

}
