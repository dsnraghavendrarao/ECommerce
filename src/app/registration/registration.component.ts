import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnlyCharacter } from '../validators/onlycharacter.validator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  submitted: boolean = false;
  constructor() {

  }

  ngOnInit() {
  	this.registration = new FormGroup({
  		name: new FormControl("",[Validators.required,OnlyCharacter]),
  		email: new FormControl("",[Validators.required,Validators.email]),
  		password: new FormControl("",[Validators.required,Validators.minLength(6)])
  	})
  }
  get f() { return this.registration.controls; }

  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registration.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registration.value))
    }
}
