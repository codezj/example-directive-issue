import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { Model } from './repository.model';
// import { ProductFormGroup, ProductFormContorl } from './form.model';



@Component({
  selector: 'app',
  templateUrl: './template.html',
  //styles: ["div {border: 2px black solid; font-style:italic}"]
  // styleUrls: ['./app.component.css']
})
export class ProductComponent {
  title = 'example';
  carP = 'test for car'
  showTable: boolean = true;
  darkColor: boolean = false;

  // model: Model = new Model();
  constructor(public model: Model){

  }
  // formGroup: ProductFormGroup = new ProductFormGroup();

  // constructor(ref: ApplicationRef ){
  //   (<any>window).appRef = ref;
  //   (<any>window).model = this.model;
  // }




  getProduct(key: number){

    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }


  //chapter 14.4 begin

  newProduct: Product = new Product();

  get jsonProduct(){
    return JSON.stringify(this.newProduct)
  }

  addProduct(p: Product){
    console.log("New Product: " + this.jsonProduct);
    this.model.saveProduct(p);
  }

  deleteProduct(key: number){
    console.log('ddddd......',key);

    this.model.deleteProduct(key);
  }

  getValidationMessage(state: any, thingName?:string){
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if(state.errors){
      for(let errorName in state.errors){
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least
            ${state.errors['minlength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;

  }

  formSubmitted: boolean = false;

  submitForm(){
    this.addProduct(this.newProduct);
    // var self = this;
    // //Make below self work in forEach
    // Object.keys(this.formGroup.controls)
    //       .forEach(
    //         // c => (
    //         // this.newProduct['name'] = this.formGroup.controls[c].value)
    //         function(c){
    //           if (c == 'name') {
    //             self.newProduct['name'] = self.formGroup.controls[c].value
    //           }
    //           else if (c == 'price'){
    //             self.newProduct['price'] = self.formGroup.controls[c].value
    //           }

    //           else if (c == 'category'){
    //             self.newProduct['category'] = self.formGroup.controls[c].value
    //           }


    //         }
    //         );
    // Will need debug
    // this.formSubmitted = true;
    // if (this.formGroup.valid) {

    //   this.addProduct(this.newProduct);
    //   this.newProduct = new Product();
    //   this.formGroup.reset();
    //   this.formSubmitted = false;
    // }
  }

  // getFormValidationMessages(form: NgForm): string[]{
  //   let messages: string[] = [];
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessage(form.controls[k],k)
  //     .forEach(m => messages.push(m))
  //   });
  //   return messages;
  // }
  //chapter 14.4 end

  selectedProduct: any;
  getSelected(product: Product): boolean{
    return product.name == this.selectedProduct;
  }



  // below is for chapter 13
  //

  getProductByPosition(position: number): any {
    return this.model.getProducts()[position];

  }

  getProductCount(): number {
    console.log("getProductCount invoked")
    return this.getProducts().length;
  }

  targetName : string = "Kayak";
  counter: number = 1;


  getKey(index: number, product: Product){
    return product.id;
  }


  get NextProduct() {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number){
    return Math.floor(this.getProduct(1).price);
  }

  // below is for chaptor 12

  getClasses(key: number): string {
    // return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    let product = this.model.getProduct(key);
    return "p-2 "+ (product.price < 50 ? "bg-info" : "bg-warning")
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  getStyles(key: number){
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price > 50 ? "green": "blue"
    };
  }

  fontSizeWithUnits: string = "50px";
  fontSizeWithoutUnits: string = "30";

  fromCtoP(para: string) {
    // console.log(para,':<----output test ---> go')

  }


  getClassesByPosition(position: number): any {


    let product = this.getProductByPosition(position);

    return "p-2 " + (product.price < 50? "bg-info": "bg-warning");
  }


}
