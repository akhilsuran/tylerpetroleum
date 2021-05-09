import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Data:any=[];
  state:any=" "
  vehicleNo:any=" "
  vehicle:any=" ";
  diesel:any;
  petrol:any;
  driver:any;
  fulltime:any;
  index=0
  constructor(){
    setInterval(()=>{
      this.vehicle=this.state+this.vehicleNo
    },200)
  }
  submit(form:any){
    form.value.index=this.index+1
    console.log(form.value)
    this.Data.push(form.value)
    this.vehicleNo=" ";
    this.state=" ";
    this.diesel="null";
    this.petrol="null"
    this.fulltime="null";
    this.driver="null";

    this.index=this.index+1
  }
  delete(i:any){
    // let index =i.index-1;
    let val=i.index
    let index
    let x:any;
    index = this.Data.findIndex((index: { index: any; }) => index.index ===val);
  
    if (index !== -1) {
      this.Data.splice(index, 1);
  }  
    console.log(i.index)
  }
  edit(i:any)
{
  this.vehicleNo=i.vehicleNo;
  this.state=i.state;
  this.diesel=i.diesel;
  this.petrol=i.petrol
  this.fulltime=i.fulltime;
  this.driver=i.driver;
  let val=i.index
  let index
  let x:any;
  index = this.Data.findIndex((index: { index: any; }) => index.index ===val);

  if (index !== -1) {
    this.Data.splice(index, 1);
}  
}
}
