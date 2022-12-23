import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';
import { Model } from './model/repository.model';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';



@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  // dynamicFormFields! DynamicFormFieldModel[];
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.myForm = this.fb.group({
      inputOne: [],
    })
  }
  
}
