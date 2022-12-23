import {Attribute, Directive, ElementRef, Input, 
    Output,EventEmitter,
    SimpleChange,
    ViewContainerRef,
    TemplateRef,

    } from "@angular/core";


@Directive({
    selector: "[paIf]"
})
export class PaStructureDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>){
        this.expressionResult = false
    }

    @Input("paIf")
    expressionResult: boolean;

    ngOnChanges(changes: {[property: string]: SimpleChange}){
        let change = changes["expressionResult"];
        if(!change.isFirstChange() && !change.currentValue){
            this.container.clear()
        } 
        else if (change.currentValue){
            this.container.createEmbeddedView(this.template)
        }
    }
}