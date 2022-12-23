import {Component, Input} from "@angular/core"
import { DiscountService } from "../common/discount.service"

@Component({
    selector:"paDiscountEditor",
    template: `<div class="form-group">
                <label class="btn">Discount</label>
                <input [(ngModel)]="discounter.discount"
                    class="form-control" type="number"/>
                    </div> `
})
export class PaDiscountEditorComponent {
    // @Input("discounter")
    // discounter: DiscountService;

    constructor( public discounter: DiscountService) {
        // this.discounter = new DiscountService()
    }

    
}