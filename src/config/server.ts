import express from 'express';




export class Server {

    public readonly app = express();

    constructor(){}

    async start(){

    

        this.app.listen(3000, () =>{
            console.log(`[APP] Running on port http://localhost:${3000}`);
        })
    }
}