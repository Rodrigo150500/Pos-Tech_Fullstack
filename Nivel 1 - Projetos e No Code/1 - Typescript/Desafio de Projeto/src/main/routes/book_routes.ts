import { Request, Response } from "express";
import { Router } from "express";
import { create_book_composer } from "../composer/create_book_composer";
import { read_book_composer } from "../composer/read_book_composer";
import { delete_book_composer } from "../composer/delete_book_composer";
import { my_sql_connection } from "../../model/settings/my_sql_configs";
import { update_book_composer } from "../composer/update_book_composer";

const router = Router()
my_sql_connection.connect()

router.post("/book",(http_request: Request, http_response:Response)=>{

    const controller = create_book_composer()

    const response = controller.create(http_request, http_response)
})

router.post("/read", (http_request: Request, http_response: Response)=>{
    
    const controller = read_book_composer()

    const response = controller.read(http_request, http_response)
})

router.delete("/delete",(http_request: Request, http_response: Response)=>{
    const controller = delete_book_composer()
    
    const response = controller.delete(http_request, http_response)
})

router.patch("/patch",(http_request: Request, http_response: Response)=>{
    const controller = update_book_composer()
    
    const response = controller.update(http_request, http_response)
})



export {router}