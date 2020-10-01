 import {ElementRef, Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom1]'
})
export class Custom1Directive {

  constructor(el:ElementRef) { 
    el.nativeElement.style.background='grey';
    el.nativeElement.style.padding='10px';
    el.nativeElement.style.border='1px solid #111';
    el.nativeElement.style.borderradius='10px';
    el.nativeElement.style.color='white';
  }
  @HostBinding("style.background") background="green";
@HostListener("click") clickEvent(){
  alert('hello host');
}
@HostListener("mouseenter") mouseenter(){
  console.log("mouse entered")
  this.background="red";
}
@HostListener("mouseleave") mouseleave(){
  console.log("mouse leave")
  this.background="blue"
}

}
