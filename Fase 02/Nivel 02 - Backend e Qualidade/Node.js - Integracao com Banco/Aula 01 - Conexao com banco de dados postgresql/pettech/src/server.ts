import { env } from "@/env/index.js"

import {app} from '@/app.js'
    
app.listen({
    port: env.PORT,
    host: "0.0.0.0"
}).then(()=>{
    console.log("Servidor rodando na 0.0.0.0 na porta 3000")
})