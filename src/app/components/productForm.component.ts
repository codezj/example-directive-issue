import {Component, Output, EventEmitter, ViewEncapsulation, 
        Inject, SkipSelf} from "@angular/core"
import { Product } from "../model/product.model"
import {Model} from "../model/repository.model"

import { VALUE_SERVICE } from "../common/valueDisplay.directive";


@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    providers: [{provide: VALUE_SERVICE, useValue: "Oranges"}]
    // styleUrls: ["productForm.component.css"],
    // encapsulation: ViewEncapsulation.Emulated
})

export class ProductFormComponent{

    newProduct: Product = new Product();

    constructor(private model: Model){}

    // @Output("paNewProduct")
    // newProductEvent = new EventEmitter<Product>();

    submitForm(form : any){
        // this.newProductEvent.emit(this.newProduct);
        this.model.saveProduct(this.newProduct)
        this.newProduct = new Product();
        form.reset;
    }

}
