import { Book } from "../../book/livro"

export interface book_repository_interface{

     create_book(book: Book):void
     read_book():Array<Book>
     delete_book():void
     update_book():void

}