import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-patient',
  templateUrl: './fetch-patient.component.html',
  styleUrls: ['./fetch-patient.component.css']
})
export class FetchPatientComponent implements OnInit {
  public collection:any
  alert:boolean=false
  constructor(private commonService:CommonService,private router:Router)  { }

  ngOnInit(): void {
    this.commonService.getAllPatient().subscribe((result)=>{
      this.collection= result
      console.log(this.collection)
    });
  }


  delete(obj:any){
    this.collection.splice(obj.id,-1)
    this.commonService.deletePatient(obj).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      //to reload the page
      window.location.reload()
    })
  }
  
}
