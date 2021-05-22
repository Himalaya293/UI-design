import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Array<Product> =  [
    {  id:1, name: 'Jack Nowak', code: 'Aldus PageMaker including versions of Loreum Ipsum'},
    {  id:2, name: 'Facebook', code: 'Many Desktop Publishing Packages and web page editors' },
    {  id:3, name: 'Mailchip', code: 'There are many variations of passages of Loreum Ipsum' },
    {  id:4, name: 'Alex T.', code: 'Loreum Ipsum dolor noretek imit set' },
    {  id:5, name: 'Monica Ryther', code: 'The Standard chunk of Loreum Ipsum' },
    {  id:6, name: 'Sandra Derick', code: 'Contrary to popular belief' },
    {  id:7, name: 'Patrick Pertners', code: 'If you are going to use a passage of Lorem'  },
    {  id:8, name: 'Machieal Fox', code: 'Humour, or non-characteristic words etc.' },
    {  id:9, name: 'Machieal Fox', code: 'Lorem Ipsum dolor noretek imit set.' },
    {  id:10, name: 'Damien Ritz', code: 'Oor Lorem Ipsum is that it has a more-or-less normal.' },
    {  id:11, name: 'Anna Smith', code: 'Lorem Ipsum dolor noretek imit set.'  }
];

  constructor() { }

  getAllProducts():Observable<IProduct[]>{
    return of(this.products)
  }

  getProductById(id:number):Observable<IProduct>{
    var product = this.products.find(item => item.id === id);
    return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id)
    product.id = this.products.length + 1
    this.products.push(product);
  }


  updateProduct(product:IProduct):void{
    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }

}
