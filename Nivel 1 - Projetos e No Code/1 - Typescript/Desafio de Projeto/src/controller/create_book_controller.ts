import {Request, Response} from "express"
import { CreateBookService } from "../services/create_book_service"

export class CreateBookController{   

    private create_book_service: CreateBookService

    constructor(create_book_service: CreateBookService){
        this.create_book_service = create_book_service
    }

    create(request: Request, response: Response){
        const http_request = request.body
        
        const http_response = this.create_book_service.create_book(http_request)

        response.status(201).json(http_response)
    }
}