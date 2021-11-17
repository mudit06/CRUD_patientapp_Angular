import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  alert:boolean= false;
  public coll:any
  addPatient= new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    physician: new FormControl(''),
    Disease: new FormControl('')
  })


  constructor(private patient:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.patient.getCurrentData(this.router.snapshot.params['id'] ).subscribe((result)=>{
      // console.log(typeof(result))
      this.coll=result
      // console.log(this.coll['id'])
      this.addPatient= new FormGroup({
        name: new FormControl(this.coll['name']),
        gender: new FormControl(this.coll['gender']),
        physician: new FormControl(this.coll['physician']),
        Disease: new FormControl(this.coll['Disease'])
      })
    }
    )
  }
  update(){
    this.patient.updatePatient(this.router.snapshot.params['id'],this.addPatient.value).subscribe((result)=>{
      console.log(result,"data sucessfully updated")
    
    this.alert=true
  })
  }
  closeAlert(){
    this.alert=false
  }

}
