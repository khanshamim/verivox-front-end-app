import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  offers: any;

  filterArray: any[] = ['price','download speed','upload speed', 'tariff name'];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {

    this.productService.getProducts().subscribe((res: any) => {
      this.offers = res.offers;
      console.log(this.offers);
    }, err => {
      console.log(err);
    });

  }

  fitlerTariff(e) {

    let selectedValue = e.target.value;
    //TODO: make it Dynamic via by making product model/interface or enum to valid selected fields
    // Sorting have to do using service's
    this.offers = this.sortOfferData(this.offers, selectedValue, true);

  }


  sortOfferData(array: any[], prop: string, reverse?: boolean) {
    if (!prop || !this._objArrayCheck(array)) {
      return array;
    }

    //TODO: Sorting Logic We'll have to write here
    return array;
  }


  private _objArrayCheck(array: any[]): boolean {
    const item0 = array[0];
    const check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === '[object Object]');
    return check;
  }

}
