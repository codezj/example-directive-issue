import {Pipe} from "@angular/core"

@Pipe({
  name: "addTax"
})
// eslint-disable-next-line @angular-eslint/use-pipe-transform-interface
export class PaAddTaxPipe{
  defaultRate: number = 10;
  transform(value: any, rate?:any): number {
    let valueNumber = Number.parseFloat(value);
    let rateNumber = rate == undefined?
        this.defaultRate : Number.parseInt(rate);
    return valueNumber + (valueNumber * (rateNumber /100));
  }


}
