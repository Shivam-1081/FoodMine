import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  order:Order = new Order();
  constructor(orderService:OrderService,router:Router){
orderService.getNewOrderForCurrentUser().subscribe({
  next:(order) =>{
    this.order = order
  },
  error:()=> {
     router.navigateByUrl('/checkout');
  },
})
  }
  ngOnInit(): void {
      
  }

}
