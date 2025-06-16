import { BookRepository } from "../../model/repository/book_repository";
import { CreateBookController } from "../../controller/create_book_controller";
import { CreateBookService } from "../../services/create_book_service";
import {my_sql_connection} from "../../model/settings/my_sql_configs"

export function create_book_composer(){
    
    my_sql_connection.connect()
    const connection = my_sql_connection.get_connection()
    const model = new BookRepository(connection)
    const service = new CreateBookService(model)
    const controller = new CreateBookController(service)

    return controller

}