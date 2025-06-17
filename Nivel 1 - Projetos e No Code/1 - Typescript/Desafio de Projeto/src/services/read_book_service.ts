import { book_repository_interface } from "../model/repository/interface/product_repository_interface"

interface isbn{
    uuid:string
}

export class ReadBookService{

    private book_repository: book_repository_interface

    constructor(book_repository: book_repository_interface){
        this.book_repository = book_repository
    }

    async read_book(http_request: isbn){
        const book = await this.#get_book(http_request.uuid)
        
        return book
    }

    #get_book(uuid: string){
        const book = this.book_repository.read_book_by_id(uuid)
        return book
    }

}