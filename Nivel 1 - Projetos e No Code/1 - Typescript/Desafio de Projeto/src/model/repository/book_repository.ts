import { Pool,RowDataPacket  } from "mysql2/promise";
import { Book } from "../book/livro";
import { book_repository_interface } from "./interface/product_repository_interface";
import { Uuid } from "../book/uuid";

interface BookRow{
    author: string
    title: string
    publish_year: number
}

export interface BookUpdate extends BookRow{
    isbn: string
}
export class BookRepository implements book_repository_interface{
    

    private connection: Pool

    constructor(connection: Pool){
        this.connection = connection
    }

    async create_book(book: Book): Promise<void> {

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
        await this.connection.execute(query,[isbn, title, author, publish_year])
    }
    async read_book_by_id(isbn: string): Promise<Book | null> {

        const isbn_id = isbn
                
        const query = `
            SELECT * FROM books WHERE isbn = ?
        `
        const [rows] = await this.connection.execute<(BookRow & RowDataPacket)[]>(query, [isbn_id]);
        if (Array.isArray(rows) && rows.length > 0){
            const row = rows[0]
            const book = new Book(row.title, row.author, row.publish_year)
            return book
        }
        return null
    }
    async delete_book(isbn: string): Promise<void> {
        const query = `
            DELETE FROM books WHERE isbn = ?
            `
        await this.connection.execute(query, [isbn])
        

    }
    async update_book(book: BookUpdate): Promise<void> {
        const query = `
            UPDATE books
            SET title = ?, author = ?, publish_year = ?
            WHERE isbn = ?
        `
        await this.connection.execute(query, [book["title"], book["author"], book["publish_year"], book["isbn"]])
    }
    
}