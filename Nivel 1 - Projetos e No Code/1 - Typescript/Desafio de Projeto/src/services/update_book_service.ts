import { BookRepository } from "../model/repository/book_repository";
import { BookUpdate } from "../model/repository/book_repository";

export class UpdateBookService{

    private book_repository: BookRepository

    constructor(book_repository: BookRepository){
        this.book_repository = book_repository
    }

    async update_book(http_request:BookUpdate ){
        const values = {
            "author": http_request["author"],
            "title": http_request["title"],
            "publish_year": http_request["publish_year"],
            "isbn": http_request["isbn"]
        }


        await this.#update_book_in_database(values)

     

    }

    async #update_book_in_database(values: BookUpdate){
        await this.book_repository.update_book(values)
    }
}