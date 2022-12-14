import { Injectable } from '@angular/core';
import {RentType} from "../model/rentType";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor() { }
  rentTypeList: RentType[] = [
    {id: 1, name: 'Hours'},
    {id: 2, name: 'Day'},
    {id: 3, name: 'Month'},
    {id: 4, name: 'Year'},
  ];
  getAll() {
    return this.rentTypeList;
  }

  findById(id: number) {
    return this.rentTypeList.find(element => element.id === id);
  }
}
