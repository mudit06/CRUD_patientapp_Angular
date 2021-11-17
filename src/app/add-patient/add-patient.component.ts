import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  alert:boolean= false;
  public coll:any
  addPatient= new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    physician: new FormControl(''),
    Disease: new FormControl('')
  })

  constructor(private patient:CommonService) { }

  ngOnInit(): void {
  }

  create(){
    this.patient.addPatient(this.addPatient.value).subscribe((result)=>{
      this.alert= true
      this.coll=result
      this.addPatient.reset({})
      console.log(result)
    })
  }
  closeAlert(){
    this.alert= false
  }

}
