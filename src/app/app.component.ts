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
  vehicle:any=" "
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
    this.vehicleNo=null;
    this.state=null;
    this.index=this.index+1
  }
  delete(i:any){
    let index =i.index-1;
    if (index !== -1) {
      this.Data.splice(index, 1);
  }  
    console.log(i.index)
  }
  edit(i:any)
{
  this.vehicleNo=i.vehicleNo;
  this.state=i.state;
}
}
