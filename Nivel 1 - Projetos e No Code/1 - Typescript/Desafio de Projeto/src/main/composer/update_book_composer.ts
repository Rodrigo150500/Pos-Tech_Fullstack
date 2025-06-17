import { BookRepository } from "../../model/repository/book_repository";
import { my_sql_connection } from "../../model/settings/my_sql_configs";
import { UpdateBookController } from "../../controller/update_book_controller";
import { UpdateBookService } from "../../services/update_book_service";

export function update_book_composer(){

    const connection = my_sql_connection.get_connection()
    const model = new BookRepository(connection)
    const services = new UpdateBookService(model)
    const controller = new UpdateBookController(services)

    return controller
}