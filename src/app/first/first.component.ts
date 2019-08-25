import { Component } from "@angular/core";

@Component ({
  selector: 'app-first',
  templateUrl: './first.component.html'
})

export class FirstComponent {
idP:string = "monId";
hellos:string = 'Good morning';
showSection:boolean = true;
tableau:string[] = [];
inputItem:string = '';

  methode():void {
    this.hellos = 'Why you have clicked ?';
    this.showSection = !this.showSection;
  }
  add():void {
    this.tableau.push(this.inputItem);
    console.log(this.tableau);
  }
}