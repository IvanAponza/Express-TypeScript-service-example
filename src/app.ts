import { envs } from "./config/adapter/envs";
import { Server } from "./config/server";


(async() =>{
    await main();
})();

function main(){
    
    const server = new Server({
        port: envs.PORT,
    });
    server.start();
}