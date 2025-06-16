import { Book } from "../model/book/livro";
import { book_repository_interface } from "../model/repository/interface/product_repository_interface";

interface BookRequestDTO{
    title: string
    author: string
    publish_year: number
}

export class CreateBookService{

    private book_repository: book_repository_interface

    constructor(book_repository: book_repository_interface){
        this.book_repository = book_repository
    }

    public create_book(http_request: BookRequestDTO){

        const title:string = http_request["title"]
        const author:string = http_request["author"]
        const publish_year = http_request["publish_year"]
        
        const book = new Book(title, author, publish_year)

        this.#insert_in_database(book)

        return book
    }

    #insert_in_database(book: Book){
        this.book_repository.create_book(book)
    }

}