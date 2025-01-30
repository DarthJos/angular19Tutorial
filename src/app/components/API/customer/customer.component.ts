import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj: any = {
    "customerId":0,
    "customerName":"",
    "customerCity":"",
    "mobileNo":"",
    "email":""
  }
  
  customerArray: any [] = [];

  constructor(private custServ: CustomerService) {
    this.getCustomers();
  }

  getCustomers() {
    this.custServ.loadCustomers().subscribe((res:any)=>{
      this.customerArray = res.data;
    })
  }

  onSavecustomer() {
    this.custServ.createNewCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert('Customer Created Success')
        this.getCustomers();
      } else {
        alert(res.message);
      }
    })
  }
}
