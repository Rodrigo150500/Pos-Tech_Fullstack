import { BookRepository } from "../model/repository/book_repository"
import {isbn} from "./read_book_service"


export class DeleteBookService{

    private book_repository:BookRepository

    constructor(book_repository: BookRepository){
        this.book_repository = book_repository
    }

    delete_book(isbn: isbn){
        const uuid = isbn["uuid"]
        this.#delete_book_from_database(uuid)
    }

    #delete_book_from_database(uuid: string){
        this.book_repository.delete_book(uuid)
    }
}