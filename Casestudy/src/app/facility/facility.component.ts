import { Component, OnInit } from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  facilitiesDelete: Facility | any;
  constructor(private facilityService : FacilityService ,
              private router: Router) {
    this.getAll();
  }

  ngOnInit(): void {
  }
 getAll() {
this.facilities = this.facilityService.getAll()
  }

  getFacilityDelete(facility: Facility) {
    this.facilitiesDelete = facility;

  }

  delete() {
    this.facilityService.deleteFacility(this.facilitiesDelete.id);
    this.router.navigate(['/facility'])
  }
}
