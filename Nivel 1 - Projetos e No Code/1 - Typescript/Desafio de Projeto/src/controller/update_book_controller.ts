import { Request, Response } from "express";
import { UpdateBookService } from "../services/update_book_service"

export class UpdateBookController{
    private update_book_service: UpdateBookService

    constructor(update_book_service:UpdateBookService){
        this.update_book_service = update_book_service
    }

    async update(request: Request, response: Response){
        const http_request = request.body
        console.log(http_request)
        await this.update_book_service.update_book(http_request)

        response.status(200).json({"data": http_request})
    }


}