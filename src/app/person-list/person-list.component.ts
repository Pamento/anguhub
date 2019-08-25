import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';
import { DatePipe } from '@angular/common';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  list:Person[] = [];

  person = { name:'',birthdate: '', single: false };

  // add(){
  //   this.list.push({
  //     id: 4,
  //     name: this.person.name,
  //     birthdate: new Date(this.person.birthdate),
  //     single: this.person.single,
  //   });
  // };


  addPerson(): void {
    this.storageService.addPerson({
      id:4,
      name: this.person.name,
      birthdate: new Date(this.person.birthdate),
      single: this.person.single
    });
  }

  constructor(private storageService: StorageService) { }
  ngOnInit() {
    this.list = this.storageService.allPersons();
  }
}
