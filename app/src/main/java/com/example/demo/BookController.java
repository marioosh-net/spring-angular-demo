package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.repo.BookRepository;

@RestController
@RequestMapping("/api")
public class BookController {
	
	@Autowired
	BookRepository repo;
	
	@GetMapping("/books")
	public Iterable<Book> get() {
		return repo.findAll();
	}
	
	@PostMapping("/books")
	@ResponseBody
	public Object save(@RequestBody Book book) {
		return repo.save(book);
	}
	
	@DeleteMapping("/books/{id}")
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}	
}
