import {Attribute, Directive, ElementRef, Input, 
    Output,EventEmitter,
    SimpleChange,
    HostBinding,
    HostListener
    } from "@angular/core";
import { Product } from "../model/product.model";

@Directive({
    selector: "[pa-attr]",
})

export class PaAttrDirective {

    constructor(private element: ElementRef){
        this.bgClass = "bgClass"
        this.product = new Product();
        this.element.nativeElement.addEventListener("click", () => {
            if (this.product != null){
                this.click.emit(this.product.category);
            }
        })
    }

    @Input("pa-attr")
    @HostBinding("class")
    bgClass: string;

    @Input("pa-product")
    product: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    ngOnInit(){
        this.element.nativeElement.classList.add(this.bgClass || "bg-success","text-white")
    }
    // constructor(element: ElementRef, @Attribute("pa-attr") bgClass: string){
    //     element.nativeElement.classList.add(bgClass ||"bg-success","text-white")
    // }

    ngOnChanges(changes: {[property: string]: SimpleChange}){
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)){
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)){
            classList.add(change.currentValue)
        }

    }
    @HostListener("click")
    triggerCustomEvent(){
        if (this.product != null){
            this.click.emit(this.product.category)
        }
    }

}