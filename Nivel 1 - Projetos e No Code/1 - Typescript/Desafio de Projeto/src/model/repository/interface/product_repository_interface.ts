import { Book } from "../../book/livro"
import { Uuid } from "../../book/uuid"
import { BookUpdate } from "../book_repository"

export interface book_repository_interface{

     create_book(book: Book): Promise<void>
     read_book_by_id(isbn: string): Promise<Book | null> 
     delete_book(isbn: string): Promise<void>
     update_book(book: BookUpdate): Promise<void> 
}