import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonCModule } from "../common/common.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonCModule],
    declarations: [PaDiscountDisplayComponent, PaDiscountEditorComponent, ProductFormComponent
    , ProductTableComponent]
    ,
    exports: [ProductFormComponent, ProductTableComponent]
})

export class ComponentsModule {}