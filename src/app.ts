import { envs } from "./config/adapter/envs";
import { AppRoutes } from "./config/app.routes";
import { Server } from "./config/server";


(async() =>{
    await main();
})();

function main(){
    
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });
    server.start();
}