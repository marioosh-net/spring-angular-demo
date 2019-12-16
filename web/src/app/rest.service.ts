import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

	private API_PREFIX = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  get() {
  	return this.http.get<any>(this.API_PREFIX+'/api/books')
  }

  delete(id:number) {
  	return this.http.delete<any>(this.API_PREFIX+'/api/books/'+id)
  }  

  save(book:any) {
		return this.http.post<any>(this.API_PREFIX+'/api/books', book);
  }

}

