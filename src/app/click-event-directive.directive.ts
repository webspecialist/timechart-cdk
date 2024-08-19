import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickEvent]'
})
export class ClickEventDirective {
  @Input() onClick!: () => void;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    if (this.onClick) {
      this.onClick();
    }
  }
}