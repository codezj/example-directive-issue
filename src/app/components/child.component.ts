import { ApplicationRef, Component, Input, Output, EventEmitter } from '@angular/core';
import { Model } from './model/repository.model';



@Component({
  selector: 'child-component',
  templateUrl: 'child.component.html',
  // styleUrls: ['./app.component.css']}
})
export class ChildComponent  {
    @Input() receiveFromP: any;
    @Output() emmiterCToP: EventEmitter<string> = new EventEmitter<string>()
    

    // customer = "this is from C to P"
//Raise the event to send the data back to parent


    constructor() {
        
    }
    onChange(para: any){
        // let msg = ":<----input is from P -> C, but it is in @Input-C"
        // console.log(this.receiveFromP,msg);
        // this.emmiterCToP.emit(this.customer)
        

    }

}