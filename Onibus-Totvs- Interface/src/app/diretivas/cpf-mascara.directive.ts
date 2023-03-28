import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCpfMascara]'
})
export class CpfMascaraDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  onInputChange(event: any) {
    let value = this.el.nativeElement.value;
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerEvents() {
    this.renderer.listen(this.el.nativeElement, 'input', (event) => {
      this.onInputChange(event);
      console.log('mudou aqui');
      
    });
  }

  ngOnInit() {
    this.registerEvents();
  }

}
