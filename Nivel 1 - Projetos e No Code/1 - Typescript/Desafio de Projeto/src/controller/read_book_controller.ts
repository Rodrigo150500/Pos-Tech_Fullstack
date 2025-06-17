import {Request, Response} from "express"
import { ReadBookService } from "../services/read_book_service"

export class ReadBookController{

    private read_book_service: ReadBookService

    constructor(read_book_service: ReadBookService){
        this.read_book_service = read_book_service
    }

    async read(request: Request, response:Response){

        const http_request = request.body

        const http_response = await this.read_book_service.read_book(http_request)

        response.status(200).json(http_response)
    }

}