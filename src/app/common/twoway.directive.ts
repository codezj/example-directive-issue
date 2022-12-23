import {Attribute, Directive, ElementRef, Input, 
    Output,EventEmitter,
    SimpleChange,
    HostBinding,
    HostListener
    } from "@angular/core";


@Directive({
    selector: "input[paModel]",
    exportAs: "paModel"
})

export class PaModel {

    direction: string = "None"

    constructor(){
        this.modelProperty ="test"
    }

    @Input("paModel")
    modelProperty: any;

    @HostBinding("value")
    fieldValue: string = "";

    ngOnChanges(changes: {[property: string]: SimpleChange}){
        let change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue){
            this.fieldValue = changes["modelProperty"].currentValue || "";
            this.direction = "Model";
        }

    }

    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue : string){
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    }


}