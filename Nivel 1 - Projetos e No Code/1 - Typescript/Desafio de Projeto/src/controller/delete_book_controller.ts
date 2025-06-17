import {Request, Response} from "express"
import { DeleteBookService } from "../services/delete_book_service";

export class DeleteBookController{
    
    private delete_book_service: DeleteBookService

    constructor(delete_book_service: DeleteBookService){
        this.delete_book_service = delete_book_service
    }

    delete(request: Request, response:Response){
        const http_request = request.body
        const http_response = this.delete_book_service.delete_book(http_request)
        
        response.status(204).json()
    }
}