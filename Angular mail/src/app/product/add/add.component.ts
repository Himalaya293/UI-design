import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Lookup } from '../models/lookup';
import { Product, IProduct } from '../models/product';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {

  private observableSubscription:Array<Subscription> = [];
  formSubmitted = false;
  productForm = this.fb.group({});
  units:Observable<Lookup[]>;
  categories:Observable<Lookup[]>;

  constructor(private fb:FormBuilder,
    //private lookupService:LookupService,
    private productService:ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.productForm.addControl('id',new FormControl(''));
    this.productForm.addControl('name',new FormControl('',[Validators.required]));
    this.productForm.addControl('code',new FormControl('',[Validators.required]));
    //this.units = this.lookupService.getUnits();

    const product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.productService.getProductById(Number.parseInt(params.get('id')))
        ));

        product$.subscribe(product=>{
          if(!isNullOrUndefined(product)){
            console.log(product);
            this.productForm.get('id').setValue(product.id);
            this.productForm.get('name').setValue(product.name);
            this.productForm.get('code').setValue(product.code);
          }
        })
  }

  ngOnDestroy(){
    this.observableSubscription.forEach(item => {
      item.unsubscribe();
      console.log(item, 'unsubscribed');
    });
  }

  save($event:any):void{

    this.formSubmitted = true;
    if(!this.productForm.valid){
      return;
    }

    this.saveProduct();

    this.router.navigate(['/products']);
  }

  saveAndContinue($event:any):void{
    this.formSubmitted = true;
    console.log(this.productForm.get('name').errors);
    if(!this.productForm.valid){
      return;
    }

    this.saveProduct();

  }

  saveProduct():void{
    const product =new Product();
    product.id = this.productForm.get('id').value;
    product.name = this.productForm.get('name').value;
    product.code = this.productForm.get('code').value;

    if(product.id == 0){
      this.productService.addNewProduct(product);}
      else {
        this.productService.updateProduct(product);
      }
  }



}
