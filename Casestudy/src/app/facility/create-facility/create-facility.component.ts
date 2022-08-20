import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      facilityType: new FormControl('',  [Validators.required]),
      area: new FormControl('' , [Validators.required]),
      cost: new FormControl('' ,  [Validators.required]),
      maxPeople: new FormControl('' ,  [Validators.required]),
      standardRoom: new FormControl('',  [Validators.required]),
      descriptionOtherConvenience: new FormControl('' , [Validators.required]),
      poolArea: new FormControl('',  [Validators.required]),
      numberOfFloors: new FormControl('',  [Validators.required]),
      facilityFree: new FormControl('' ,  [Validators.required]),
      rentType: new FormControl('' ,  [Validators.required]),
      image: new FormControl('' ,  [Validators.required])

    }
  )

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(),
        Name: new FormControl(),
        facilityType: new FormControl(),
        area: new FormControl(),
        cost: new FormControl(),
        maxPeople: new FormControl(),
        standardRoom: new FormControl(),
        descriptionOtherConvenience: new FormControl(),
        poolArea: new FormControl(),
        numberOfFloors: new FormControl(),
        facilityFree: new FormControl(),
        image: new FormControl(),
        rentType: new FormControl()
      })
  }
  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility);
    this.facilityForm.reset();
    this.router.navigate(['/facility']);
  }

  type = "";

  getType(event: Event) {
    // @ts-ignore
    this.type = event.target.value;
  }
}
