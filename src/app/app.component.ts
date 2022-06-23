import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagina Inicial do curso';
  
  
}
import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Output() notify = new EventEmitter();


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
  ProductDetailsComponent,
  product: Product | undefined;
  /* ... */
  constructor(private route: ActivatedRoute) { }
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  this.product = products.find(product => product.id === productIdFromRoute);
}
  constructor() { }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  

  ngOnInit() {
  }

}
