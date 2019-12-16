import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	bookForm: FormGroup;
	@Output() onSave = new EventEmitter<any>();

  constructor(
  	private restService:RestService,
  	private fb:FormBuilder) { }

  ngOnInit() {
  	this.formInit();
  }

  formInit() {
  	this.bookForm = this.fb.group({
  		'title':['', Validators.required],
      'author':['', Validators.required]
  	});
  }

  save() {
    this.restService.save(this.bookForm.value).subscribe(newBook => {
    	this.onSave.emit(newBook);
    });
  }

}
