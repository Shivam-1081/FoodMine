import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const VALIDATORS_MESSAGES:any = {
  required:'Should  not  be empty',
  email:'Email is not valid',
  minLength: 'Should be at least  {requiredLength} characters',
  notmatch:'Password and confirm password does not match'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements  OnInit,OnChanges {
  @Input()
  control!:AbstractControl
  @Input()
  showsErrorWhen:boolean = true;
  errorMessages:string[] = [];


  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkvalidation();
  }
  ngOnInit(): void {
     this.control.statusChanges.subscribe(()=>{
      this.checkvalidation();
     });
     this.control.valueChanges.subscribe(()=>{
      this.checkvalidation();
     });

  }
  checkvalidation(){
    const errors = this.control.errors;
    if (!errors){
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key=>VALIDATORS_MESSAGES[key]);
    //['required','email' ]
  }

}
