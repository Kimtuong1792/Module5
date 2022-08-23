import {FacilityType} from "./facilityType";
import {RentType} from "./rentType";

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  rentType?: RentType;
  facilityType?: FacilityType;
  image?: string;
}
