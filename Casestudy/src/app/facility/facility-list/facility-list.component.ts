import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
facility : Facility [] = [];
facilityDelete: Facility={}
  constructor() {
    this.facility.push({id:1 , name:"Villa Beach Front", area:1000, cost:2500 , maxPeople: 4,
      standardRoom : "normal", descriptionOtherConvenience : "with swimming pool" , poolArea: 300 , numberOfFloors: 4, rentType: "day", facilityType: "Villa"})
    this.facility.push({id:2 , name:"House Princess 01", area:1000, cost:2500 , maxPeople: 4,
      standardRoom : "normal", descriptionOtherConvenience : "there is a grill" , poolArea: 200 , numberOfFloors: 3, rentType: "day" , facilityType: "House"})
    this.facility.push({id:3 , name:"Room Twin 01", area:1000, cost:2500 , maxPeople: 4,
      standardRoom : "normal", descriptionOtherConvenience : "with swimming pool" , poolArea: 300 , numberOfFloors: 2, rentType: "day", facilityType: "Room",facilityFree:"water"})
    this.facility.push({id:4 , name:"Room Twin 02", area:1000, cost:2500 , maxPeople: 4,
      standardRoom : "normal", descriptionOtherConvenience : "have a television" , poolArea: 300 , numberOfFloors: 2, rentType: "day", facilityType:"Room",facilityFree:"water"})
  }

  ngOnInit(): void {
  }

  getFacilityDelete(item: Facility) {
    this.facilityDelete=item;
  }
}
