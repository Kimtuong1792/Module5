import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createForm: FormGroup;
  error_messages = {
    'email': [
      { type: 'required', message: 'Email  không được để trống.' },
      { type: 'email', message: 'Email email không đúng định dạng' }

    ],

    'password': [
      { type: 'required', message: 'password không được để trống.' },
      { type: 'minlength', message: 'password  Nhập sai định dạng: Độ dài phải >6 kí tự' },

    ],
    'confirmpassword': [
      { type: 'required', message: 'password  không được để trống.' },
      { type: 'minlength', message: 'password length.' }
    ],
    'country': [
      { type: 'required', message: 'country không được để trống.' },
    ],
    'age': [
      { type: 'required', message: 'Age  không được để trống.' },
      { type: 'min', message: 'Tuổi phải lớn hơn 18' }

    ],
    'gender': [
      { type: 'required', message: 'gender  không được để trống.' },

    ],
    'phone': [
      { type: 'required', message: 'phone  không được để trống.' },
      { type: 'pattern', message: 'phone  không đúng định dạng.' },

    ],
  }
  constructor(public formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)

      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)

      ])),
      country: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(18),

      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(' /^\\+84\\d{9,10}$/')
      ]))

    }, {
      validators: this.password.bind(this)
    })
  }
  ngOnInit() {
  }
    createNewForm()
    {
      console.log(this.createForm);
    }


  password(formGroup: FormGroup) {
    const  password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

// check(c: AbstractControl) {
//   const v = c.value;
//   return (v.password === v.confirmPassword) ? null : {
//     passwordnotmatch: true
//   };
// }
  }
