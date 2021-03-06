import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radion-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
