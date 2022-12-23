import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";
import {Injectable} from "@angular/core"


@Injectable()
export class Model {
    // private dataSoure: SimpleDataSource;
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;

    constructor(private dataSource: SimpleDataSource){
        // this.dataSoure = new SimpleDataSource;
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p=> this.products.push(p));
        
    }

    
    getProducts(): Product[] {
        
        
        return this.products;
    }

    getProduct(id: number): any {

        return this.products.find(p => this.locator(p, id));
    }

    saveProduct (product: any){
        if (product.id != 0 || product.id == null ){
            product.id = this.generateID();
            
            
            this.products.push(product);

        }else {
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
            
        }
    }

    deleteProduct(id: number){
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1){
            this.products.splice(index, 1)
        }
    }


    private generateID(): number {
        console.log('####candidate value is fixed, need to make to be accumulated...####');
        
        let candidate = 6;
        while (this.getProduct(candidate) != null){
            console.log(this.getProduct(candidate));
            
            candidate ++;
        }
        
        return candidate;
    }


    swapProduct(){
        let p = this.products.shift();
        this.products.push(new Product(p?.id,p?.name,p?.category,p?.price))
    }
}