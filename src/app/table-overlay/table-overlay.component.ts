import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-overlay',
  templateUrl: './table-overlay.component.html',
  styleUrls: ['./table-overlay.component.scss']
})
export class TableOverlayComponent {
  @Input() clickedElement!: HTMLElement;
}
