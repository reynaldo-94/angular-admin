import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`
  }

  // Con el Input le digo a Angular que este componente incrementador puede recibir una propiedad desde el padre llamada progreso
  // Renombramos valor a progreso
  @Input('valor') progreso: number = 40
  // @Input() progreso: number = 40

  @Input() btnClass: string = 'btn-primary'

  // El output es de tipo eventEmitter
  // El eventEmitter necesita saber que informacion es la que fluye a traves de el
  // Inicializamos con new EventEmitter
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100)
      return this.progreso = 100
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0)
      return this.progreso = 0
    }

    this.valorSalida.emit( this.progreso )
    return this.progreso = this.progreso + valor
  }

  onChange( nuevoValor: number ) {

    if( nuevoValor >= 100) {
      this.progreso = 100
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0
    } else {
      this.progreso = nuevoValor
    }

    this.valorSalida.emit(this.progreso)
  }

}
