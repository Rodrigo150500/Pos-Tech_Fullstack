import { BookRepository } from "../../model/repository/book_repository";
import { ReadBookController } from "../../controller/read_book_controller";
import { ReadBookService } from "../../services/read_book_service";
import { my_sql_connection } from "../../model/settings/my_sql_configs";

export function read_book_composer(){

    my_sql_connection.connect()

    const connection = my_sql_connection.get_connection()
    const model = new BookRepository(connection)
    const service = new ReadBookService(model)
    const controller = new ReadBookController(service)

    return controller
}