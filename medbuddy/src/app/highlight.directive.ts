import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostListener('mouseover') over() {
    this.renderer.addClass( this.element.nativeElement, 'increase');
  }

  @HostListener('mouseout') out() {
    this.renderer.removeClass( this.element.nativeElement, 'increase');
  }

}
