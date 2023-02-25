import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[TelMascara]'
})
export class TelMascaraDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event:{target: {value: string}}){
    let tel = event.target.value.replace(/\D/g, '');

    if (tel.length > 11) {
      tel = tel.substring(0,11)
    }

    tel = tel.replace(/(\d{2})(\d)/, '($1) $2')
    tel = tel.replace(/(\d{5})(\d)/, '$1-$2')
    this.el.nativeElement.value = tel;    
  }
}
