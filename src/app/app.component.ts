import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Data:any=[];
  state:any;
  vehicleNo:any;
  vehicle:any="eg:"
  constructor(){
    setInterval(()=>{
      this.vehicle=this.state+this.vehicleNo
    },200)
  }
  submit(form:any){
    console.log(form.value)
    this.Data.push(form.value)
  }
  delete(i:any){
    console.log(i.id)
  }
}
