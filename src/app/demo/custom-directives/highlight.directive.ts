import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _ref: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() { 
    this._ref.nativeElement.style.backgroundColor = '#FF0';
  }

  @HostListener('mouseleave') onMouseLeave() { 
    this._ref.nativeElement.style.backgroundColor = "";
  }
}
