import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.view.html'
})

export default class ContactComponent {
    constructor() {
        this.model = {};
        this.contactForm = new FormGroup({
            email: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required)
        })

    }
    onSubmit(values, isValid) {
        this.invalid = false;

        if (isValid) {
            this.submit = true;
        } else {
            this.invalid = true;
        }
    }
}
