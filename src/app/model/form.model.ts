import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.formvalidator";

export class ProductFormContorl extends FormControl {
    label: string;
    modelProperty: string;

    constructor(label:string, property:string, value:any, validator:any){
        super(value,validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessage(){
        
        let messages: string[] = [];
        if(this.errors){
          for(let errorName in this.errors){
            switch (errorName) {
              case "required":
                messages.push(`You must enter a ${this.label}`);
                break;
              case "minlength":
                messages.push(`A ${this.label} must be at least 
                ${this.errors['minlength'].requiredLength} characters`);
                break;
              case "pattern":
                messages.push(`The ${this.label} contains illegal characters`);
                break;
              case "limit":
                messages.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}`)
                break;
            }
          }
        }
        return messages;
    
      }
}

export class ProductFormGroup extends FormGroup {
    constructor(){
        super({
            name: new ProductFormContorl("Name","name","",Validators.required),
            category: new ProductFormContorl("Category","category","",
            Validators.compose([
                Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(3),
                Validators.maxLength(10)
            ]),),
            price: new ProductFormContorl("Price","price","",
            Validators.compose([
                Validators.required,
                LimitValidator.Limit(100),
                Validators.pattern("^[0-9\.]+$"),
                
            ]),),
        })
    }

    get productControls(): ProductFormContorl[] {
        return Object.keys(this.controls).map(
            k => this.controls[k] as ProductFormContorl);
    }

    getValidationMessage(name: string): string[]{
        return (this.controls['name'] as ProductFormContorl).getValidationMessage();
    }

    getFormValidationMessages() : string[] {
        let messages: string[] = [];
        Object.values(this.controls).forEach(c => 
            messages.push(...(c as ProductFormContorl).getValidationMessage()));
        return messages;
    }
}