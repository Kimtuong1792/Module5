import {Component, OnInit} from '@angular/core';
import {BenhNhan} from '../../model/benh-nhan';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhAnService} from '../../service/benhAn.service';
import {Router} from '@angular/router';
import {BenhNhanService} from '../../service/benhNhan.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhNhan: BenhNhan[];
  savingForm: FormGroup = new FormGroup({
    id: new FormControl(),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    liDo: new FormControl('', [Validators.required]),
    dieuTri: new FormControl('', [Validators.required]),
    bacSi: new FormControl('', [Validators.required]),
    benhNhan: new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  });

  constructor(private benhAnService: BenhAnService,
              private router: Router,
              private benhNhanService: BenhNhanService) {
    this.benhNhanService.getAll().subscribe(benhNhans => {
      this.benhNhan = benhNhans;
    });
  }

  ngOnInit(): void {
  }
  submit() {
    const saving = this.savingForm.value;
    this.benhAnService.saveSaving(saving).subscribe(() => {
      this.router.navigate(['/saving']);
    });
  }
}
