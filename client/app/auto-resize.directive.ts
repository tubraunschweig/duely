/**
 *This file handles the form layout if the window is resized
*/
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[racAutoResize]'
})
export class AutoResizeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onkeyup() {
    this.resize();
  }
/** 
 *the resize method sets the scrollheight, padding at the top and at the bottom
*/
  private resize(): void {
    const scrollHeight = this.el.nativeElement.scrollHeight;
    const paddingTop = this.el.nativeElement.style.paddingTop;
    const paddingBottom = this.el.nativeElement.style.paddingBottom;

    const newHeight = scrollHeight - (paddingTop + paddingBottom);

    this.el.nativeElement.style.height = newHeight + 'px';
  }

}
