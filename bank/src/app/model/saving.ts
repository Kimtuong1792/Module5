import {Customer} from './customer';

export interface Saving {
  id?: number;
  customer?: Customer;
  openDate?: string;
  sentDate?: string;
  period?: string;
  money?: number;
  interestRate?: number;
  endow?: string;
}
