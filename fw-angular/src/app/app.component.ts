import { Component } from '@angular/core';
import { GameclientService } from './gameclient.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GameclientService]
})
export class AppComponent {
    title = 'Tour of Heroes';

    constructor(private gameClientService: GameclientService) { }

    // ngOnInit() {
    //     this.interval = setInterval(() => {
    //         console.log("looping")
    //     }, 1000)


    // }

    // ngOnDestroy() {
    //     if (this.interval) {
    //         clearInterval(this.interval);
    //     }
    // }
}
