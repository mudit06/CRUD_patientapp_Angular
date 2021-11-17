import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name!:string
  password!:string

  constructor(private patient:CommonService, private router:Router ) { }

  ngOnInit(): void {
  }
  logIn(){
    if(this.name=="admin123"&& this.password=="1234"){
      this.router.navigateByUrl('/all')
    }else{
      alert('please enter valid details')
    }

  }
}
