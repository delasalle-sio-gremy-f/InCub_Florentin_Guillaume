import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Consultant} from '../store';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['../../styles/main.css', './consultant.component.css']
})

export class ConsultantComponent implements OnInit {
  consultantList;
  displayPutForm = false;
  consultantTemp: Consultant = new Consultant(500, '', '', '');
  surnamePutCtrl: FormControl;
  namePutCtrl: FormControl;
  descriptionPutCtrl: FormControl;
  consultantPutForm: FormGroup;

  constructor(private storeServiceImpl: StoreService, fb: FormBuilder) {
    this.surnamePutCtrl = fb.control('', [Validators.required]);
    this.namePutCtrl = fb.control('', [Validators.required]);
    this.descriptionPutCtrl = fb.control('', [Validators.required]);
    this.consultantPutForm = fb.group({
      surname: this.surnamePutCtrl,
      name: this.namePutCtrl,
      description: this.descriptionPutCtrl
    });
  }

  ngOnInit() {
    this.storeServiceImpl.consultantList().subscribe(
      x => this.consultantList = x,
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification'),
    );
  }

  delete(id: number) {
    this.storeServiceImpl.deleteConsultant(id).subscribe(
      x => {
        for (let i = 0; i < this.consultantList.length; i++) {
          if (this.consultantList[i].id === id) {
            this.consultantList.splice(i, 1);
          }
        }
      }
    );
  }

  displayModifyForm(consultant) {
    if (this.displayPutForm === false) {
      this.displayPutForm = true;
      this.fillTempConsultant(consultant);
    } else {
      this.displayPutForm = false;
    }
  }

  fillTempConsultant(consultant) {
    this.consultantTemp.id = consultant.id;
    this.surnamePutCtrl.setValue(consultant.surname);
    this.namePutCtrl.setValue(consultant.name);
    this.descriptionPutCtrl.setValue(consultant.description);
  }

  modify() {
    console.log(this.consultantPutForm.value);
    this.consultantPutForm.value.id = this.consultantTemp.id;
    this.storeServiceImpl.putConsultant(this.consultantPutForm.value as Consultant).subscribe();
    this.displayPutForm = false;
    this.storeServiceImpl.consultantList().subscribe(
      x => this.consultantList = x,
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification'),
    );
  }
}
