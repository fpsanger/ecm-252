import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraNoComponente',
})
export class SombraNaTabelaDirective {
  @HostBinding('style.boxShadow') sombra: string;
  @Input('appSombraNaTabela') sombraEntrada: string;

  // constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'box-shadow',
    //   '10px 10px'
    // );
    this.sombra = this.sombraEntrada;
  }
  @HostListener('mouseleave') quandoOMouseSair() {
    // this._renderer.removeStyle(this._elementRef.nativeElement, 'box-shadow');
    this.sombra = '';
  }
}
