import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'post-api',
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList:any[] = []

  carObj: any = {
    "carId":0,
    "brand":"",
    "model":"",
    "year":"",
    "color":"",
    "dailyRate":"",
    "carImage":"",
    "regNo":""
  }

  http = inject(HttpClient);

  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
      this.carList = res.data;
    })
  }

  onSaveCar() {
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((res:any) => {
      if(res.result) {
        alert("Car Created Successfully");
        this.getAllCars(); //<-- Actualiza nuevamente la lista de autos
      }
      else {
        alert(res.message)
      }
    })
  }
}
