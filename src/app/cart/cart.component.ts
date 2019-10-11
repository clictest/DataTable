import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input () data;

public editCart = new EventEmitter();
public deletecart = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  deleteItem(i): void{
  this.editCart.emit({
    value: this.data.splice(i,1);
  })
}

editItem(stud,i): void {
  console.log(stud,i)
  this.deletecart.emit({stud})
}
  

}
