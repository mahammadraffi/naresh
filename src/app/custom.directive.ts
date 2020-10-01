import {ElementRef,Directive} from '@angular/core';
@Directive({
    selector:'[color]'

})



export class customDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.background='red';
        el.nativeElement.style.padding='10px';
        el.nativeElement.style.border='1px solid #111';
        el.nativeElement.style.borderradius='5px';
        el.nativeElement.style.color='white';

    }

}