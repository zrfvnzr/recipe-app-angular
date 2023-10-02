import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mode: string = 'login' // 'login' | 'register'

    switchMode() {
        this.mode = this.mode === 'login' ? 'register' : 'login';
    }

}
