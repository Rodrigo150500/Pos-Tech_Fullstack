import { Request, Response } from "express";
import { Router } from "express";
import { create_book_composer } from "../composer/create_book_compose";

const router = Router()

router.post("/book",(http_request: Request, http_response:Response)=>{

    const controller = create_book_composer()

    const response = controller.create(http_request, http_response)
})

export {router}