import { Component, OnInit } from '@angular/core';
import { Person } from "../entities/person";
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  persons:Person[] = [
    {id: 1, name: 'ludovic', birthdate:new Date(), single:true},
    {id: 2, name: 'Pawel', birthdate:new Date(), single:true},
    {id: 3, name: 'Thierry', birthdate:new Date(), single:false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
