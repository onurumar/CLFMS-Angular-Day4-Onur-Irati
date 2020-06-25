import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

 info = new FormGroup({
   firstName: new FormControl('',Validators.required),
   lastName: new FormControl('',Validators.required),
   age: new FormControl('',Validators.required),
   email:new FormControl('',Validators.required),
   phone:new FormControl('',Validators.required),
   nationality:new FormControl('',Validators.required)
 });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
   if(this.info.valid){
      var a = this.info.value;
      console.log(a)
   }
 }

}
