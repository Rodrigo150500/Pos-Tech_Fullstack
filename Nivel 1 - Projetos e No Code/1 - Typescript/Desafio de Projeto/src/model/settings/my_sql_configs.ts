import {createPool, Pool} from "mysql2"

class MySqlConnection{

    private host: string
    private port: number
    private user: string
    private password: string
    private database: string
    private connection!: Pool

    constructor(){
        this.host= '127.0.0.1'
        this.port = 3306
        this.user = "root"
        this.password = ""
        this.database = "biblioteca"
    }

    connect(){
        this.connection = createPool({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }

    get_connection(){
        return this.connection
    }
    
}

export const my_sql_connection = new MySqlConnection()