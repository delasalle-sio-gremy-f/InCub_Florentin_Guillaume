import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  displayAddForm: boolean = false;
  emailPutCtrl: FormControl;
  passwordPutCtrl: FormControl;
  loginPutForm: FormGroup;
  addPutForm: FormGroup;
  surnamePutCtrl: FormControl;
  namePutCtrl: FormControl;
  passwordAddPutCtrl: FormControl;
  emailAddPutCtrl: FormControl;

  constructor(private storeServiceImpl: StoreService, fb: FormBuilder) {
    this.emailPutCtrl = fb.control('', [Validators.required]);
    this.passwordPutCtrl = fb.control('', [Validators.required]);
    this.emailAddPutCtrl = fb.control('', [Validators.required]);
    this.passwordAddPutCtrl = fb.control('', [Validators.required]);
    this.namePutCtrl = fb.control('', [Validators.required]);
    this.surnamePutCtrl = fb.control('', [Validators.required]);
    this.addPutForm = fb.group({
      name: this.namePutCtrl,
      surname: this.surnamePutCtrl,
      emailAdd: this.emailAddPutCtrl,
      passwordAdd: this.passwordAddPutCtrl
    });
    this.loginPutForm = fb.group({
      email: this.emailPutCtrl,
      password: this.passwordPutCtrl
    });
  }

  ngOnInit() {
  }

  displayPutForm() {
    this.displayAddForm = !this.displayAddForm;
  }

  login() {
    console.log(this.loginPutForm.value);
    let res = this.storeServiceImpl.login(this.loginPutForm.value.email, this.loginPutForm.value.password).subscribe()
    console.log(res)
  }

  addUser() {
    console.log(this.addPutForm.value);
    //let res = this.storeServiceImpl.login(this.loginPutForm.value.email, this.loginPutForm.value.password).subscribe()
    //console.log(res)
  }

}
