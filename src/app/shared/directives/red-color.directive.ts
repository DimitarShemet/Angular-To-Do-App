import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedColor]',
})
export class RedColorDirective {
  constructor(public elem: ElementRef, public renderer: Renderer2) {}

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', null);
  }
}
