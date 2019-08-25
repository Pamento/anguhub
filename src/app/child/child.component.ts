import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Person } from '../entities/person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name:Person
  @Input() birth:Date
  @Input() single:boolean

  @Output() change: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.change.emit(this.name);
  }
}
