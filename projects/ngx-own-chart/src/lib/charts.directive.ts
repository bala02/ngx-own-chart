import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

declare function chart(option: any, id: any): any;

@Directive({
  selector: '[ngxownchart]',
})
export class ChartsDirective implements OnInit, AfterViewInit {
  @Input() option: any;
  @Input() chartid: any;
  tooltipElement = document.createElement('div');

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.tooltipElement.setAttribute('id', this.chartid);
    this.tooltipElement.style.width = '600px';
    this.tooltipElement.style.height = '600px';
    this.element.nativeElement.appendChild(this.tooltipElement);
  }

  ngAfterViewInit(): void {
    chart(this.option, this.chartid);
  }
}
