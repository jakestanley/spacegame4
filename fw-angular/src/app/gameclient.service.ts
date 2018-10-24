import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { ClientService } from './client.service';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class GameclientService {

    messages: Subject<any>;

    constructor(
        private messageService: MessageService
      , private clientService: ClientService) {

        console.log("trying to connect to socket")
        let connection = clientService.connect();

        let subscriber = connection.subscribe(data => {
            console.log("data")
        });

        var emitter = setInterval(function() {
           clientService.socket.emit("message", "status update") 
        }, 20000);



    }



}
