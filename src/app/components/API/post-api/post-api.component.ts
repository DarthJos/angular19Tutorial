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

  http = inject(HttpClient);  //<-- inyecta el módulo de HttpClient para poder usarse en este componente

  //EJEMPLO de consumir GET API --> consulta un registro
  getAllCars() {
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any) => {
      this.carList = res.data;
    })
  }

  //EJEMPLO uso de api con POST -->  Crea un registro
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

  //EJEMPLO uso de API con PUT --> Actualiza un registro
  updateCar() {
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((res:any) => {
      if(res.result) {
        alert("Car Updated Successfully");
        this.getAllCars();
      } else {
        alert(res.message);
      }
    })
  }

  //Esta función solo es para cargar los datos del objeto de carro para presentar en el formulario
  onEdit(data: any) {
    this.carObj = data;
  }

  //EJEMPLO uso de API con DELETE --> Elimina un registro
  onDelete(id: number) {

    const isDelete = confirm("Are you sure you want to delete? ")

    if(isDelete == true) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyId?carid=" + id).subscribe((res:any)=>{
        if(res.result) {
          alert("Car Deleted Successfully");
          this.getAllCars();
        } else {
          alert(res.message);
        }
      })
    }

  }
}
