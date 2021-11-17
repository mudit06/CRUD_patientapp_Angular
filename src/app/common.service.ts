import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url="http://localhost:3000/Patient"

  phyurl="http://localhost:3000/Physician"
  constructor(private _http:HttpClient) { }
  getAllPatient(){
    return this._http.get(this.url)
  }

  addPatient(data: any){
    return this._http.post(this.url,data)
  }
  deletePatient(id: number){
    return this._http.delete(`${this.url}/${id}`)
  }
  getCurrentData(id: number){
    return this._http.get(`${this.url}/${id}`)
  }
  updatePatient(id: number,data:any){
    return this._http.put(`${this.url}/${id}`,data)
  }

  createPhysician(data:any){
    return this._http.post(this.phyurl,data)
  }
}
