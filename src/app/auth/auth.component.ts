import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    @ViewChild('form', {static: false}) form: NgForm;

    mode: string = 'login' // 'login' | 'register'

    switchMode() {
        this.form.reset();
        this.mode = this.mode === 'login' ? 'register' : 'login';
    }

    onSubmit(form: NgForm) {
        form.reset();
    }

}
