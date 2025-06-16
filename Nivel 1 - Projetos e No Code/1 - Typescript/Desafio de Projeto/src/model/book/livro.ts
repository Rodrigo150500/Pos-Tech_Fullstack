import { Uuid } from "./uuid"

export class Book{

    title: string
    author: string
    isbn: string
    publish_year: number

    constructor(title: string, author: string, publish_year: number){
        this.title = title
        this.author = author
        this.isbn = new Uuid().get_value()
        this.publish_year = publish_year
    }

    public get_title():string{
        return this.title
    }

    public get_author():string{
        return this.author
    }

    public get_isbn():string{
        return this.isbn
    }

    public get_publish_year(): number{
        return this.publish_year
    }
}