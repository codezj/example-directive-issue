import {Component} from "@angular/core"

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "paToggleView",
  templateUrl: "toggleView.component.html"
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class PaToggleView{
  showContent: boolean = true;
}
