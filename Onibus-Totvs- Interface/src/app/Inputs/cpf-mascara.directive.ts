import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CpfMascara]'
})
export class CpfMascaraDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])

  onInputChange(event: { target: { value: string; }; }) {
    let cpf = event.target.value.replace(/\D/g, '');

    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11);
    }

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.el.nativeElement.value = cpf;
  }

}
