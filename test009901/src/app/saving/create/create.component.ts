// import {Component, OnInit} from '@angular/core';
// import {BenhNhan} from '../../model/benh-nhan';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {BenhAnService} from '../../service/benhAn.service';
// import {Router} from '@angular/router';
// import {BenhNhanService} from '../../service/benhNhan.service';
//
// @Component({
//   selector: 'app-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.css']
// })
// export class CreateComponent implements OnInit {
//   customer: BenhNhan[];
//   savingForm: FormGroup = new FormGroup({
//     id: new FormControl(),
//     openDate: new FormControl('', [Validators.required]),
//     sentDate: new FormControl('', [Validators.required]),
//     period: new FormControl('', [Validators.required]),
//     money: new FormControl('', [Validators.required, Validators.min(10000000)]),
//     interestRate: new FormControl('', [Validators.required]),
//     endow: new FormControl('', [Validators.required]),
//     customer: new FormGroup({
//       id: new FormControl('', [Validators.required]),
//       name: new FormControl('', [Validators.required])
//     })
//   });
//
//   constructor(private savingService: BenhAnService,
//               private router: Router,
//               private customerService: BenhNhanService) {
//     this.customerService.getAll().subscribe(customerS => {
//       this.customer = customerS;
//     });
//   }
//
//   ngOnInit(): void {
//   }
//   submit() {
//     const saving = this.savingForm.value;
//     this.savingService.saveSaving(saving).subscribe(() => {
//       this.router.navigate(['/saving']);
//     });
//   }
// }
