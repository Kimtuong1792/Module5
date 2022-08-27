import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FacilityType} from "../../model/facilityType";
import {RentType} from "../../model/rentType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {FacilityTypeService} from "../../service/facilityType.service";
import {RentTypeService} from "../../service/rentType.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Facility} from "../../model/facility";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    facilityType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    facilityFree: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),

  });
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  id: number = 0;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      facilityService.findById(this.id).subscribe(facilitys => {
        this.facilityForm.patchValue(facilitys);
        this.facilityTypeService.getAll().subscribe(facilityType => {
          this.facilityType = facilityType;
          for (const item of facilityType) {
            if (item.id === facilitys.facilityType?.id) {
              this.facilityForm.patchValue({facilityType: item});
            }
          }
        });
        this.rentTypeService.getAll().subscribe(rentTypes => {
          this.rentType = rentTypes;
          for (const item of rentTypes) {
            if (item.id === facilitys.rentType?.id) {
              this.facilityForm.patchValue({rentType: item}) ;
            }
          }
        });
      })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.facilityService.findById(this.id).subscribe(item => {
      this.facilityForm = new FormGroup(
        {
          id: new FormControl(item.id),
          name: new FormControl(item.name, [Validators.required]),
          area: new FormControl(item.area),
          cost: new FormControl(item.cost),
          maxPeople: new FormControl(item.maxPeople),
          standardRoom: new FormControl(item.standardRoom),
          descriptionOtherConvenience: new FormControl(item.descriptionOtherConvenience),
          poolArea: new FormControl(item.poolArea),
          numberOfFloors: new FormControl(item.numberOfFloors),
          facilityFree: new FormControl(item.facilityFree),
          image: new FormControl(item.image),
          facilityType: new FormControl(item.facilityType?.name),
          rentType: new FormControl(item.rentType)
        }
      )
    })


  }

  ngOnInit(): void {
  }

  getFacilityType() {
    return this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityType = facilityTypes;
    })
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      this.router.navigate(['/facility']);
    });
  }

  type = "";

  getType(event: Event) {
    // @ts-ignore
    this.type = event.target.value;
    // @ts-ignore
    console.log(this.type)
  }
}
