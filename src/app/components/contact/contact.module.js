import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import ContactComponent from './contact.component';
import { routing } from './contact.routing';


@NgModule({
    imports:        [routing, CommonModule, ReactiveFormsModule],
    declarations:   [ContactComponent]
})

export class ContactModule { }
