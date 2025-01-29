import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  productList: any[] = [];
  constructor(private http: HttpClient) {}

  getUsers() {
    //Devuelve un observable al cual debemos suscribirnos
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
    })
  }

  getProducts() {
    this.http.get("http://fake-store-api.mock.beeceptor.com/api/products").subscribe((result:any) => {
      this.productList = result;
    })
  }
}
