/**
 * @author Sebastian Larrieu
 * @email slarrieu@neocomplexx.com
 * @create date 2018-11-22 08:34:05
 * @modify date 2018-11-22 08:34:05
 * @desc [description]
*/
import { Component, OnInit } from '@angular/core';
import { NgxNeoIDB } from 'ngx-neo-indexeddb';
import { Person } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private indexedDB: NgxNeoIDB;

  public newEmail: string;
  public newName: string;
  public findId: number;
  public people: Array<Person>;
  public selected: Person;

  constructor() {
    this.indexedDB = new NgxNeoIDB('myDb', 1);
    this.people = new Array();
  }

  ngOnInit() {
    this.indexedDB.openDatabase(1, (evt) => {
      const objectStore = evt.currentTarget.result.createObjectStore(
        'people', { keyPath: 'id', autoIncrement: true });

      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
    });
  }

  public async saveToDb() {
    const person = new Person(this.newName, this.newEmail);
    try {
      await this.indexedDB.add('people', person);
      window.alert('Saved to db');
      this.newEmail = '';
      this.newName = '';
    } catch (erro) {
      window.alert('Error saving to db');
      console.error(erro);
    }
  }

  public async reloadAll() {
    this.people = await this.indexedDB.getAll('people');
  }

  public async getById() {
    try {
      this.selected = await this.indexedDB.getByKey('people', this.findId);
    } catch (erro) {
      window.alert('Error getting: ' + this.findId);
      console.error(erro);
    }
  }
}
