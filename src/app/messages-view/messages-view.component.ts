import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
    selector: 'app-messages-view',
    templateUrl: './messages-view.component.html',
    styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {

    constructor(private _location: Location, private router: Router) {
    }

    ngOnInit() {
    }

    goBack() {
        this._location.back();
    }

    sendMessageClick() {
        alert('Send Message Button!');
    }

    isReceivedMessage(i: number): boolean {
        if (i % 2 === 0) {
            return false;
        } else {
            return true;
        }
    }

    isSentMessage(i: number): boolean {
        if (i % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

}
