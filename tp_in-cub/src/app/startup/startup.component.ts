import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Consultant, Startup} from '../store';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['../../styles/main.css', './startup.component.css']
})
export class StartupComponent implements OnInit {
  displayAddForm = false;
  displayPutForm = false;
  consultantTemp: Consultant = new Consultant(500, '', '', '');
  startupTemp: Startup = new Startup(500, '', '', '', 500, '', '', this.consultantTemp);

  nameCtrl: FormControl;
  sectorCtrl: FormControl;
  representativeCtrl: FormControl;
  coFoundersCtrl: FormControl;
  descriptionCtrl: FormControl;
  addressCtrl: FormControl;
  consultantCtrl: FormControl;
  startupForm: FormGroup;

  namePutCtrl: FormControl;
  sectorPutCtrl: FormControl;
  representativePutCtrl: FormControl;
  coFoundersPutCtrl: FormControl;
  descriptionPutCtrl: FormControl;
  addressPutCtrl: FormControl;
  consultantPutCtrl: FormControl;
  startupPutForm: FormGroup;

  startupList;
  consultantList;

  constructor(private storeServiceImpl: StoreService, fb: FormBuilder) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.sectorCtrl = fb.control('', [Validators.required, Validators.maxLength(10)]);
    this.representativeCtrl = fb.control('', [Validators.required, Validators.maxLength(15)]);
    this.coFoundersCtrl = fb.control('', [Validators.required]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);
    this.addressCtrl = fb.control('', [Validators.maxLength(25)]);
    this.consultantCtrl = fb.control('', [Validators.required]);
    this.startupForm = fb.group({
      name: this.nameCtrl,
      sector: this.sectorCtrl,
      representative: this.representativeCtrl,
      nbCoFounders: this.coFoundersCtrl,
      description: this.descriptionCtrl,
      address: this.addressCtrl,
      consultant: this.consultantCtrl
    });
    this.namePutCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.sectorPutCtrl = fb.control('', [Validators.required, Validators.maxLength(10)]);
    this.representativePutCtrl = fb.control('', [Validators.required, Validators.maxLength(15)]);
    this.coFoundersPutCtrl = fb.control('', [Validators.required]);
    this.descriptionPutCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);
    this.addressPutCtrl = fb.control('', [Validators.maxLength(25)]);
    this.consultantPutCtrl = fb.control('', [Validators.required]);
    this.startupPutForm = fb.group({
      name: this.namePutCtrl,
      sector: this.sectorPutCtrl,
      representative: this.representativePutCtrl,
      nbCoFounders: this.coFoundersPutCtrl,
      description: this.descriptionPutCtrl,
      address: this.addressPutCtrl,
      consultant: this.consultantPutCtrl
    });
  }

  ngOnInit() {
    this.storeServiceImpl.startupList().subscribe(
      x => this.startupList = x,
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification'),
    );
    this.storeServiceImpl.consultantList().subscribe(
      x => this.consultantList = x
    );
  }

  register() {
    this.consultantList.forEach(consultant => {
      if (this.consultantCtrl.value === consultant.surname) {
        this.startupForm.value.consultant = consultant;
      }
    });
    console.log(this.startupForm.value);
    this.storeServiceImpl.addStartup(this.startupForm.value as Startup).subscribe(
      x => this.startupList.push(x),
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification'),
    );
    this.displayAddForm = false;
  }

  delete(id: number) {
    this.storeServiceImpl.deleteStartup(id).subscribe(
      x => {
        for (let i = 0; i < this.startupList.length; i++) {
          if (this.startupList[i].id === id) {
            this.startupList.splice(i, 1);
          }
        }
      }
    );
  }

  // 1 is for the create form and 2 is for the put form
  displayCreateForm() {
    if (this.displayAddForm === false) {
      this.displayAddForm = true;
    } else {
      this.displayAddForm = false;
    }
  }

  displayModifyForm(startup) {
    if (this.displayPutForm === false) {
      this.displayPutForm = true;
      console.log(startup);
      this.fillTempStartup(startup);
    } else {
      this.displayPutForm = false;
    }
  }

  fillTempStartup(startup) {
    /*console.log(startup.id);
      console.log(this.startupTemp.id);*/
    this.startupTemp.id = startup.id;
    this.namePutCtrl.setValue(startup.name);
    this.sectorPutCtrl.setValue(startup.sector);
    this.representativePutCtrl.setValue(startup.representative);
    this.coFoundersPutCtrl.setValue(startup.nbCoFounders);
    this.descriptionPutCtrl.setValue(startup.description);
    this.addressPutCtrl.setValue(startup.address);
    this.consultantPutCtrl.setValue(startup.consultant.name);
  }

  /*createModifiedStartup() {
    this.startupTemp.name = this.namePutCtrl.value;
    this.startupTemp.sector = this.sectorPutCtrl.value;
    this.startupTemp.representative = this.representativePutCtrl.value;
    this.startupTemp.nbCoFounders = this.coFoundersPutCtrl.value;
    this.startupTemp.description = this.descriptionPutCtrl.value;
    this.startupTemp.address = this.addressPutCtrl.value;
    this.startupTemp.consultant = this.consultantPutCtrl.value;
  }*/

  modify() {
    this.consultantList.forEach(consultant => {
      if (this.consultantPutCtrl.value === consultant.surname) {
        this.startupPutForm.value.consultant = consultant;
      }
    });
    console.log(this.startupPutForm.value);
    this.startupPutForm.value.id = this.startupTemp.id;
    this.storeServiceImpl.putStartup(this.startupPutForm.value as Startup).subscribe();
    this.displayPutForm = false;
    this.storeServiceImpl.startupList().subscribe(
      x => this.startupList = x,
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification'),
    );
  }
}


