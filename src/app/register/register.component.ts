import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean= false;
  public coll:any
  addPhysician= new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl('')
  })

  constructor(private patient:CommonService) { }

  ngOnInit(): void {
  }
  createphysician(){
    this.patient.createPhysician(this.addPhysician.value).subscribe((result)=>{
      console.log("Physician data stored")
      this.coll=result
      this.alert=true
    })
    // console.log(this.addPhysician.value)
  }
  closeAlert(){
    this.alert=false
  }

}
