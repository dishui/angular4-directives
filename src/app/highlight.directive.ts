//import { Directive, ElementRef, Renderer } from '@angular/core';
import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
 @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
 };
 @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
 };
 @HostBinding('style.backgroundColor') get setColor() {
   return this.backgroundColor;
 };
 @Input() defaultColor = "white";
 @Input('highlight') highlightColor = "green";
 /*
 @HostListener('click'. ['$event']){
   onClick(event) {
     console.log("Event Target" + event.target);
   }
 }*/
 private backgroundColor: string;
 constructor() {}

 ngOnInit(){
   this.backgroundColor = this.defaultColor;
 }
 /*
  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
   // this.elementRef.nativeElement.style.backgroundColor = "blue";
   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'brown');
  }*/

}
