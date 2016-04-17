import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router'

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    providers: [RouteParams]
})

export class ProductDetailComponent
{
    pageTitle: string;
    
    constructor(private _routeParams: RouteParams)
    {
        //+ converts to numeric id
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
}