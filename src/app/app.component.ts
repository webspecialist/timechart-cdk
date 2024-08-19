import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// import * as Plot from '@observablehq/plot';
// import * as d3 from 'd3';

// *********
// import {Group} from '../../../ng-time-chart/src/lib/group';
import { Group, NgTimeChartComponent } from '@puzzleitc/ng-time-chart';
import { LayoutStrategy } from '@puzzleitc/ng-time-chart';
import { DateTime } from 'luxon';
import { Settings } from 'luxon';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TableOverlayComponent } from './table-overlay/table-overlay.component';
// import { CustomTimeChartComponent } from './custom-time-chart/custom-time-chart.component';

interface Item {
  name: string;
  startTime: DateTime;
  endTime: DateTime;
  class: string;
  hideDateRangeInHeader: boolean;
  details: string;
  onClick: (event: MouseEvent) => void; // Update this line
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChildren('itemElement') itemElements!: QueryList<ElementRef>;
  @ViewChild('tablePortalContainer', { read: ViewContainerRef }) tablePortalContainer!: ViewContainerRef;
  // clickedElement: HTMLElement;
  clickedElement!: HTMLElement;
  @ViewChild('appRoot', { static: true }) appRoot!: ElementRef;
  height: any
  // title = 'library-d-test';

  // wrapText(inputString: any, segmentLength: any) {
  //   const words = inputString.split(" ");
  //   let result = "";
  //   let currentLineLength = 0;
  //   let numberOfLines = 0;

  //   for (const word of words) {
  //     if (currentLineLength + word.length + 1 <= segmentLength) {
  //       // Add the word and a space to the current line
  //       result += (result === "" ? "" : " ") + word;
  //       currentLineLength += word.length + 1;
  //     } else {
  //       // Start a new line with the word
  //       result += "\n" + word;
  //       currentLineLength = word.length;
  //       numberOfLines++;
  //     }
  //   }

  //   // Count the last line
  //   if (result !== "") {
  //     numberOfLines++;
  //   }

  //   return {
  //     text: result,
  //     numberOfLines: numberOfLines
  //   };
  // }

  // ngOnInit() {
  // const fontSizeInt = 16;
  // const tickHeight = 100;
  // const width = 1300;
  // const height = 300;
  // const sideMargins = 100;
  // const data = [
  //   {
  //     year: 1788,
  //     composition: `Symphony No. 41 "Jupiter"`,
  //     composer: "Wolfgang Amadeus Mozart",
  //     link: "https://en.wikipedia.org/wiki/Symphony_No._41_(Mozart)"
  //   },
  //   {
  //     year: 1894,
  //     composition: "Prelude to the Afternoon of a Faun",
  //     composer: "Claude Debussy",
  //     link: "https://en.wikipedia.org/wiki/Pr%C3%A9lude_%C3%A0_l%27apr%C3%A8s-midi_d%27un_faune"
  //   },
  //   {
  //     year: 1805,
  //     composition: `Symphony No. 3 "Eroica"`,
  //     composer: "Ludwig van Beethoven",
  //     link: "https://en.wikipedia.org/wiki/Symphony_No._3_(Beethoven)"
  //   },
  //   {
  //     year: 1913,
  //     composition: "Rite of Spring",
  //     composer: "Igor Stravinsky",
  //     link: "https://en.wikipedia.org/wiki/The_Rite_of_Spring"
  //   },
  //   {
  //     year: 1741,
  //     composition: "Goldberg Variations",
  //     composer: "Johann Sebastian Bach",
  //     link: "https://en.wikipedia.org/wiki/Goldberg_Variations"
  //   },
  //   {
  //     year: 1881,
  //     composition: "Piano Concerto No. 2",
  //     composer: "Johannes Brahms",
  //     link: "https://en.wikipedia.org/wiki/Piano_Concerto_No._2_(Brahms)"
  //   },
  //   {
  //     year: 1826,
  //     composition: `A Midsummer Night's Dream "Overture"`,
  //     composer: "Felix Mendelssohn",
  //     link: "https://en.wikipedia.org/wiki/A_Midsummer_Night%27s_Dream_(Mendelssohn)"
  //   }
  // ]

  // const preparedData = data.map((d) => {
  //   const composerShort = d.composer.split(" ").slice(-1);
  //   const { text, numberOfLines } = this.wrapText(
  //     `${d.composition} (${composerShort})`,
  //     20 //lineLength
  //   );
  //   return { ...d, text, numberOfLines };
  // }).sort((a, b) => d3.ascending(a.year, b.year));

  // const timelinePlot = Plot.plot({
  //   style: {
  //     fontSize: fontSizeInt + "px",
  //     fontFamily: "Lato"
  //   },
  //   width,
  //   height,
  //   marginLeft: sideMargins,
  //   marginRight: sideMargins,
  //   x: { axis: null },
  //   y: { axis: null, domain: [-height / 2, height / 2] },
  //   marks: [
  //     Plot.ruleY([0]),
  //     Plot.ruleX(preparedData, {
  //       x: "year",
  //       y: (d, i) => (i % 2 === 0 ? tickHeight : -tickHeight)
  //     }),
  //     Plot.dot(preparedData, { x: "year", fill: "#fff", stroke: "#000" }),
  //     Plot.text(preparedData, {
  //       x: "year",
  //       y: (d, i) => (i % 2 === 0 ? -fontSizeInt / 2 - 4 : fontSizeInt / 2 + 4),
  //       text: (d) => d.year.toString()
  //     }),
  //     Plot.text(preparedData, {
  //       x: "year",
  //       y: (d, i) =>
  //         i % 2 === 0
  //           ? tickHeight + d.numberOfLines * fontSizeInt * 0.5
  //           : -tickHeight - d.numberOfLines * fontSizeInt * 0.5,
  //       text: "text"
  //     })
  //   ]
  // })

  // const plotContainer = document.getElementById('plot-container');
  // if (plotContainer) {
  //   plotContainer.appendChild(timelinePlot);
  // } else {
  //   console.error('Plot container not found');
  // }
  // }

  // *******************************
  storedEvent!: MouseEvent;
  private overlayRef!: OverlayRef;
  readonly currentYear = DateTime.local().year;

  title = 'NgTimeChartLibrary';
  groups: Group[];

  startDate = DateTime.fromISO(`2013-10-29`);
  endDate = DateTime.fromISO(`2015-11-30`);

  readonly tiledLayoutStrategy = LayoutStrategy.Tiled;
  readonly stackedLayoutStrategy = LayoutStrategy.Stacked;
  // sanitizeHtml(html: string): SafeHtml {
  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2, private overlay: Overlay) {
    Settings.defaultLocale = 'en-UK';
    this.groups = [
      new Group(
        'DEV_5764062',
        [
          {
            name: '287-494-3 (2013-12-19)',
            startTime: DateTime.fromISO(`2013-12-19`),
            endTime: DateTime.fromISO(`2013-12-19`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: this.sanitizeHtml(`
              Requested information:
              <strong>Hello</strong>
            `),
          },
          {
            name: '287-494-3 (2015-06-23)',
            startTime: DateTime.fromISO(`2015-06-23`),
            endTime: DateTime.fromISO(`2015-06-23`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2013-10-29)',
            startTime: DateTime.fromISO(`2013-10-29`),
            endTime: DateTime.fromISO(`2013-10-29`),
            class: 'type-new-div',
            hideDateRangeInHeader: true,
            itemDetails: 'CCH draft decision sent to registrant on 19 Dec 2013',
            // onClick: () => {
            //   setTimeout(() => {
            //     this.handleClick(this.storedEvent);
            //   }, 200);
            // }            
            // onClick: (event: void) => this.showOverlay(event)
            // onClick: () => this.showOverlay('287-494-3 (2013-10-29)')
            // onClick: (event: MouseEvent) => this.showOverlay(event)
          },
          {
            name: '287-494-3 (2014-07-31)',
            startTime: DateTime.fromISO(`2014-07-31`),
            endTime: DateTime.fromISO(`2014-07-31`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
        ].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => alert('Group clicked')
      ),
      new Group(
        'DEV_5764073',
        [
          {
            name: '287-494-3 (2015-11-02)',
            startTime: DateTime.fromISO(`2015-11-02`),
            endTime: DateTime.fromISO(`2015-11-02`),
            class: 'type-b',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2013-12-31)',
            startTime: DateTime.fromISO(`2013-12-31`),
            endTime: DateTime.fromISO(`2013-12-31`),
            class: 'type-b',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-01-29)',
            startTime: DateTime.fromISO(`2014-01-29`),
            endTime: DateTime.fromISO(`2014-01-29`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 2014-01-29',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-05-01)',
            startTime: DateTime.fromISO(`2014-05-01`),
            endTime: DateTime.fromISO(`2014-05-01`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
        ]
      ),
      new Group(
        'DEV_5764296',
        [
          {
            name: '287-494-3 (2015-11-02)',
            startTime: DateTime.fromISO(`2015-11-02`),
            endTime: DateTime.fromISO(`2015-11-02`),
            class: 'type-a',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2013-12-31)',
            startTime: DateTime.fromISO(`2013-12-31`),
            endTime: DateTime.fromISO(`2013-12-31`),
            class: 'type-b',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-01-29)',
            startTime: DateTime.fromISO(`2014-01-29`),
            endTime: DateTime.fromISO(`2014-01-29`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 2014-01-29',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-05-01)',
            startTime: DateTime.fromISO(`2014-05-01`),
            endTime: DateTime.fromISO(`2014-05-01`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
        ]
      ),
      new Group(
        'DEV_5764751',
        [
          {
            name: '287-494-3 (2015-11-02)',
            startTime: DateTime.fromISO(`2015-11-02`),
            endTime: DateTime.fromISO(`2015-11-02`),
            class: 'type-c',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2013-12-31)',
            startTime: DateTime.fromISO(`2013-12-31`),
            endTime: DateTime.fromISO(`2013-12-31`),
            class: 'type-b',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-01-29)',
            startTime: DateTime.fromISO(`2014-01-29`),
            endTime: DateTime.fromISO(`2014-01-29`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 2014-01-29',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: '287-494-3 (2014-05-01)',
            startTime: DateTime.fromISO(`2014-05-01`),
            endTime: DateTime.fromISO(`2014-05-01`),
            class: 'type-covid',
            hideDateRangeInHeader: true,
            details: 'CCH draft decision sent to registrant on 19 Dec 2013',
            onClick: () => alert('I was clicked 😊')
          },
        ]
      )
    ];
  }

  // this.handleClick(event);
  // this.storedEvent = event;
  // console.log(event)
  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      this.showOverlay(event);
    });
  }

  ngAfterViewInit() {
    this.height = this.appRoot.nativeElement.offsetHeight;
    // console.log('App-root height:', height);
  }

  // ngOnInit(): void {
  //   const elements = document.getElementsByClassName('type-covid');

  //   for (let i = 0; i < elements.length; i++) {
  //     this.renderer.listen(elements[i], 'click', (event: MouseEvent) => {
  //       console.log(event)
  //       this.showOverlay(event);
  //     });
  //   }
  // }

  // selements: any;
  // ngOnInit(): void {
  //   const elements = document.getElementsByClassName('type-new-div');
  //   console.log(elements);
  //   this.selements = elements;
  //   // for (let i = 0; i < elements.length; i++) {
  //   //   this.renderer.listen(elements[i], 'click', (event: MouseEvent) => {
  //   //     this.myClick(event);
  //   //   });
  //   // }
  // }

  myClick(event: MouseEvent): void {
    console.log(event);
    this.showOverlay(event);
  }

  showTableOverlay(): void {
    // const tablePortal = new ComponentPortal(TableOverlayComponent);
    // const componentRef = this.tablePortalContainer.createComponent(tablePortal);
    // componentRef.instance.clickedElement = this.clickedElement;
    const tablePortal = new ComponentPortal(TableOverlayComponent);
    this.tablePortalContainer.clear();
    const componentRef = this.tablePortalContainer.createComponent(tablePortal.component);
    componentRef.instance.clickedElement = this.clickedElement;
  }

  setStartDate(value: string) {
    const date = DateTime.fromISO(value);
    // this.startDate = (!!value && value.length > 0) ? DateTime.fromISO((value)) : null;
    // this.startDate = date.isValid ? date : DateTime.invalid('Invalid date');
    this.startDate = date;
  }

  setEndDate(value: string) {
    // this.endDate = (!!value && value.length > 0) ? DateTime.fromISO((value)) : null;
    const date = DateTime.fromISO(value);
    // this.endDate = date.isValid ? date : DateTime.invalid('Invalid date');
    this.endDate = date;
  }

  showOverlay(event: any) {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      return;
    }
    // const target = document.querySelector('.type-new-div');
    const target = event.target as HTMLElement;
    //
    // const rect = target.getBoundingClientRect();
    console.log(event);
    console.log(this.height);
    // console.log(this.appRoot.nativeElement.offsetHeight);
    // console.log(window.screenX, window.scrollY)
    const positionStrategy = this.overlay.position()
      .global()
      // .left(`${rect.left}px`)
      // .top(`${rect.bottom }px`);
      .left(`${event.x}px`)
      .top(`${event.y - this.height}px`);
    // const positionStrategy = this.overlay.position()
    //   .flexibleConnectedTo(new ElementRef(target))
    //   .withPositions([{
    //     originX: 'center',
    //     originY: 'bottom',
    //     overlayX: 'center',
    //     overlayY: 'top',
    //     offsetY: 1
    //   }]);

    if (this.overlayRef) {
      this.overlayRef.dispose();
    }

    this.overlayRef = this.overlay.create({ positionStrategy });

    const tablePortal = new ComponentPortal(TableOverlayComponent);
    this.overlayRef.attach(tablePortal);
  }


  handleClickOnItem(event: Event) {
    // console.log(event.target);
    this.showOverlay(event);
  }

  handleClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    this.clickedElement = clickedElement;

    // Find the parent div of the clickedElement
    const parentDiv = this.clickedElement.closest('div');
    // console.log(parentDiv)
    if (parentDiv) {
      const grandParentDiv = parentDiv?.parentElement?.closest('div');
      const gg = grandParentDiv?.parentElement?.closest('div');
      console.log(gg)
      const table = this.renderer.createElement('table');
      const tbody = this.renderer.createElement('tbody');
      const row = this.renderer.createElement('tr');
      const cell1 = this.renderer.createElement('td');
      const cell2 = this.renderer.createElement('td');

      const cell1Text = this.renderer.createText('Cell 1');
      const cell2Text = this.renderer.createText('Cell 2');

      this.renderer.appendChild(cell1, cell1Text);
      this.renderer.appendChild(cell2, cell2Text);
      this.renderer.appendChild(row, cell1);
      this.renderer.appendChild(row, cell2);
      this.renderer.appendChild(tbody, row);
      this.renderer.appendChild(table, tbody);

      // Append the table to the parent div
      // this.renderer.appendChild(parentDiv, table);
      this.renderer.appendChild(gg, table);
    }
  }

  hideOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

}

// startDate = DateTime.fromISO(`${this.currentYear}-05-01`);
// endDate = DateTime.fromISO(`${this.currentYear}-08-31`);