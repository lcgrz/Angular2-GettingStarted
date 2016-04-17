import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ProductService} from './product.service';
import {IProduct} from './product';
import {StarComponent} from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]
})

export class ProductDetailComponent implements OnInit
{
    pageTitle: string = 'Product Detail';
    product: IProduct;
    error: string;
    
    constructor(private _routeParams: RouteParams, private _router: Router, private _productService: ProductService)
    {

    }
    
    onBack(): void {
        this._router.navigate(['Products']);
    }
    
    ngOnInit() {
        if (!this.product) {
            //+ converts to numeric id
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.error = <any>error);
    }
}