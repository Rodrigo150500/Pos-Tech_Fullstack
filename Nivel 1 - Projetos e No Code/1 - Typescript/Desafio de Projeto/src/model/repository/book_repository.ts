import { Pool } from "mysql2";
import { Book } from "../book/livro";
import { book_repository_interface } from "./interface/product_repository_interface";

export class BookRepository implements book_repository_interface{
    
    private connection: Pool

    constructor(connection: Pool){
        this.connection = connection
    }

    create_book(book: Book): void {

        const author = book.get_author()
        const title = book.get_title()
        const publish_year = book.get_publish_year()
        const isbn = book.get_isbn()
        
        const query = `
            INSERT INTO books 
                (isbn, title, author, publish_year)
            VALUES
                (?,?,?,?)
            `
        this.connection.execute(query,[isbn, title, author, publish_year])
    }
    read_book(): Array<Book> {
        throw new Error("Method not implemented.");
    }
    delete_book(): void {
        throw new Error("Method not implemented.");
    }
    update_book(): void {
        throw new Error("Method not implemented.");
    }
    
}