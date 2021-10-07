import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Cálculo de Média';
  codigoRMA:number = 12345;
  nome:string = "Carlos";
  //Notas
  nota1:number = 10;
  nota2:number = 10;
  nota3:number = 8;
  nota4:number = 10;
  //Cálculo da Média
  media:number = ( this.nota1 + this.nota2 + this.nota3 + this.nota4 ) / 4;
  //Data e Imagem
  data:string = '2021/10/06';
  imagem:string = 'assets/img/MinhaFoto.jpg';
  //Status
  aprovado:boolean = true;

  //Template String
  primeiraNota: string = `Primeira Nota ${this.nota1}`;
  segundaNota: string = `Segunda Nota ${this.nota2}`;
  terceiraNota: string = `Terceira Nota ${this.nota3}`;
  quartaNota: string = `Quarta Nota ${this.nota4}`;
  resultado: string = `Sua média final é : `;


}
