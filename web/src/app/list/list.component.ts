import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	books:any;

  constructor(private restService:RestService) { }

  ngOnInit() {
  	this.loadBooks();
  }

  loadBooks() {
  	this.restService.get().subscribe(books => {
  		this.books = books;
  	});  	
  }

  onSave(book:any) {
  	this.loadBooks();
  }

}
