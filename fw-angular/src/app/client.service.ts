import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ClientService {

    public socket;

    constructor() { }

    connect(): Rx.Subject<MessageEvent> {

        this.socket = io("http://127.0.0.1:12555", {
            transports: ['websocket']
          }
        )


        let observable = new Observable(observer => {
            this.socket.on('connect', (data) => {
                console.log("connected")
                console.log(data)
            });
            this.socket.on('reconnect_attempt', () => {
                this.socket.io.opts.transports = ['polling', 'websocket'];
            });
            this.socket.on('message', (data) => {
                console.log("received message");
            });
            this.socket.on('error', console.error.bind(console));
            return () => {
                this.socket.disconnect();
            }
        });

        let observer = {
            next: (data: Object) => {
                console.log("emit")
                this.socket.emit('message', data)
            }
        }

        return Rx.Subject.create(observer, observable);
    }

}
