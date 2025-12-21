import { Component, NgModule } from '@angular/core';
import { IconDirective, IconModule } from '@coreui/icons-angular';


import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ContainerComponent, 
    RowComponent, 
    ColComponent, 
    CardComponent, 
    CardBodyComponent, 
    FormDirective, 
    InputGroupComponent, 
    InputGroupTextDirective,
     IconDirective, 
     FormControlDirective,
     ButtonDirective,FormsModule,CommonModule, RouterLink]
})
export class RegisterComponent {
      constructor() {
  }

}
