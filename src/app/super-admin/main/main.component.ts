import { Component, OnInit } from '@angular/core';
import { menuService } from '../../shared/services/menu.service';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  public menuInfo: Array<any> = [];
  public sidebarToggle = true;

  constructor() { }

  ngOnInit() {
    this._sidebarToggle();
   
  }

  public _sidebarToggle() {

  

  }

 
  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }
}
