import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FacilityType} from "../../model/facilityType";
import {RentType} from "../../model/rentType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facilityType.service";
import {RentTypeService} from "../../service/rentType.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup = new FormGroup({});
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  id: number = 0;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
      console.log(this.id);
      const facility = facilityService.findById(this.id);
      if(facility != null) {
        this.rentType = this.rentTypeService.getAll();
        if(this.rentType != null) {
            this.facilityForm = new FormGroup({
              id: new FormControl(facility.id),
              name: new FormControl(facility.name ,[Validators.required , Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]  ),
              area: new FormControl(facility.area ,[Validators.required]  ),
              cost: new FormControl(facility.cost , [Validators.required] ),
              maxPeople: new FormControl(facility.maxPeople , [Validators.required] ),
              standardRoom: new FormControl(facility.standardRoom  , [Validators.required] ),
              descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience , [Validators.required]  ),
              poolArea: new FormControl(facility.poolArea ,[Validators.required, Validators.pattern("^[1-9]+\\d*")]  ),
              numberOfFloors: new FormControl(facility.numberOfFloors , [Validators.required, Validators.pattern("^[1-9]+\\d*")]  ),
              facilityFree: new FormControl(facility.facilityFree , [Validators.required] ),
              rentType: new FormControl(facility.rentType?.id , [Validators.required]  ),
              image: new FormControl(facility.image , [Validators.required]  ),
              facilityType: new FormControl(facility.facilityType?.name , [Validators.required] )
            })
            this.facilityType = this.facilityTypeService.getALl();
        }
      }


    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    const facility = this.facilityService.findById(this.id)
    // @ts-ignore
    this.facilityForm = new FormGroup(
      {
        // @ts-ignore
        id: new FormControl(facility.id),
        // @ts-ignore
        name: new FormControl(facility.name , [Validators.required]),
        // @ts-ignore
        area: new FormControl(facility.area),
        // @ts-ignore
        cost: new FormControl(facility.cost),
        // @ts-ignore
        maxPeople: new FormControl(facility.maxPeople),
        // @ts-ignore
        standardRoom: new FormControl(facility.standardRoom),
        // @ts-ignore
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        // @ts-ignore
        poolArea: new FormControl(facility.poolArea),
        // @ts-ignore
        numberOfFloors: new FormControl(facility.numberOfFloors),
        // @ts-ignore
        facilityFree: new FormControl(facility.facilityFree),
        // @ts-ignore
        image: new FormControl(facility.image),
        // @ts-ignore
        facilityType: new FormControl(facility.facilityType?.name),
        // @ts-ignore
        rentType: new FormControl(facility.rentType)
      }
    )
  }

  ngOnInit(): void {
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    facility.facilityType = this.facilityTypeService.findById(parseInt(this.facilityForm.value.facilityType));
    facility.rentType = this.rentTypeService.findById(parseInt(this.facilityForm.value.rentType));
    this.facilityService.updateFacility(id, facility);
    this.router.navigate(['/facility']);
  }

  type = "";

  getType(event: Event) {
    // @ts-ignore
    this.type = event.target.value;
    // @ts-ignore
    console.log(event.target.value)
  }
}
