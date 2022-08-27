import {Component, OnInit} from '@angular/core';
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

  constructor(private facilityService: FacilityService,
              private router: Router) {
    this.facilityService.getAll().subscribe(facility => {
      this.facilities = facility;
    })
  }

  ngOnInit(): void {
  }


  getFacilityDelete(facility: Facility) {
    console.log(facility.id);
    this.facilitiesDelete = facility;
  }

  delete() {
    this.facilityService.deleteFacility(this.facilitiesDelete.id).subscribe(()=>{
        this.facilityService.getAll().subscribe(facility => {
          this.facilities = facility;
        })
    }

    );

  }
}
