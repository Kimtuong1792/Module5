import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BenhNhanService} from '../../service/benhNhan.service';
import {BenhAnService} from '../../service/benhAn.service';
import {BenhNhan} from '../../model/benh-nhan';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  savingForm: FormGroup;
  id: string;

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getSaving(this.id);
    });
  }

  benhNhan: BenhNhan[] = [];

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getSaving(id: string) {
    return this.benhAnService.findById(id).subscribe(saving => {
      this.savingForm = new FormGroup({
        id: new FormControl(saving.id, [Validators.required]),
        startDate: new FormControl(saving.startDate, [Validators.required]),
        endDate: new FormControl(saving.endDate, [Validators.required]),
        liDo: new FormControl(saving.liDo, [Validators.required]),
        dieuTri: new FormControl(saving.dieuTri, [Validators.required]),
        bacSi: new FormControl(saving.bacSi, [Validators.required]),
        benhNhan: new FormGroup({
          id: new FormControl(saving.benhNhan.id, [Validators.required]),
          name: new FormControl(saving.benhNhan.name, [Validators.required])
        })
      });
      console.log(saving);
    });
  }

  getAllCustomer() {
    this.benhNhanService.getAll().subscribe(customer => {
      this.benhNhan = customer;
    });
  }

  updateSaving(id: string) {
    const saving = this.savingForm.value;
    // this.customerService.findById(saving.benhNhan).subscribe(benhNhan => {
    //     saving.benhNhan = {
    //       id: benhNhan.id,
    //       name: benhNhan.name
    //     };
    this.benhAnService.updateSaving(id, saving).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/benhAn']);
    });
  }

// );
// }
  thongbao() {
    alert('Bạn không cập nhật ?');
  }
}
