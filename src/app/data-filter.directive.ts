import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDataFilter]'
})
export class DataFilterDirective {
  @Input('data-filter') appDataFilter: string;

  constructor() { }

}
