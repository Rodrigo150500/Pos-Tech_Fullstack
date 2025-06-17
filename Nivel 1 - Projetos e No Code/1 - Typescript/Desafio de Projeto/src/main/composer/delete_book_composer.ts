import { my_sql_connection } from "../../model/settings/my_sql_configs";
import { BookRepository } from "../../model/repository/book_repository";
import { DeleteBookController } from "../../controller/delete_book_controller";
import { DeleteBookService } from "../../services/delete_book_service";

export function delete_book_composer(){

    const connection = my_sql_connection.get_connection()
    const modal = new BookRepository(connection)
    const service = new DeleteBookService(modal)
    const controller = new DeleteBookController(service)

    return controller
}