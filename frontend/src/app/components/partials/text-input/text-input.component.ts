import { Component ,Input,OnInit} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit {
  @Input()
  control!:AbstractControl;
  @Input()
  showsErrorWhen:boolean = true;
  @Input()
  label!:string;
  @Input()
  type:'text' | 'password' | 'email' = 'text';
  get formControl(){
    return this.control as FormControl;
  }
  constructor() { }
  ngOnInit(): void {
      
  }

}
