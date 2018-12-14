import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCreateHeader]'
})
export class CreateHeaderDirective implements OnInit {

  @Input() headerText: string;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    const headElement = this.renderer.createElement('h1');
    const text = this.renderer.createText(this.headerText);
    this.renderer.appendChild(headElement, text);
    this.renderer.appendChild( this.element.nativeElement, headElement );

  }
}
