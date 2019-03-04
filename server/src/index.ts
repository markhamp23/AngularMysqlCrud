import express, { Application } from 'express';

class Server {

    app: Application;

    constructor(){
        this.app = express();
    }

    config(): void {
    }

    routes(): void{
    }

    start(): void{
    }
}

new Server();