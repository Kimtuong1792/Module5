import {CustomerType} from "./customerType";

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  numberPhone?: string;
  email?: string;
  address?: string;
  customerType: CustomerType;
}
