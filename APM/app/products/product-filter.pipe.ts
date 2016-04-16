import {PipeTransform, Pipe} from 'angular2/core';
import {IProduct} from './product';

@Pipe({ name: 'productFilter'})

export class ProductFilterPipe implements PipeTransform
{
    transform(values: IProduct[], args: string[]) : IProduct[]
    {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? values.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filter) != -1) : values;
    }
}