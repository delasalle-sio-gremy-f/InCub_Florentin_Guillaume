import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Consultant, Startup} from '../store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../styles/main.css', './index.component.css']
})
export class IndexComponent implements OnInit {
  consultantList: Array<Consultant> = [];
  startupList: Array<Startup> = [];
  nbCard = 3;

  constructor(private storeServiceImpl: StoreService) {
  }

  ngOnInit() {
    
    this.storeServiceImpl.consultantList().subscribe(
      x => {
        for (let i = 0; i < this.nbCard; i++) {
          this.consultantList.push(x[i]);
        }
      },
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification')
    );
    this.storeServiceImpl.startupList().subscribe(
      x => {
        for (let i = 0; i < this.nbCard; i++) {
          this.startupList.push(x[i]);
        }
      },
      err => console.error('Observer got an error: '),
      () => console.log('Observer got a complete notification')
    );
  }

}
