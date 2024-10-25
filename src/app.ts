import { Server } from "./config/server";


(async() =>{
    await main();
})();

function main(){
    
    const server = new Server();
    server.start();
}