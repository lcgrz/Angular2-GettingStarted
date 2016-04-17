import { Component } from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';


@Component({
    selector: 'pm-app',
    template: `
    <div>
    <nav class="navbar navbar-default">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav navbar-nav">
    <li><a [routerLink]="['Welcome']">Home</a></li>
    <li><a [routerLink]="['Products']">Products</a></li>
    </ul>
    </nav>
    <div class="container"><router-outlet></router-outlet></div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig(
    [
        {path: '/welcome', component: WelcomeComponent, name: 'Welcome', useAsDefault: true},
        {path: '/products', component: ProductListComponent, name: 'Products'},
        {path: '/product/:id', component: ProductDetailComponent, name: 'ProductDetail'}
    ]
    
)

export class AppComponent
{
    pageTitle: string = 'Acme Product Management';
}