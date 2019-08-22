import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

  facilityArray=[{value:'1',label:'Swimming Pool'},
                  {value:'2',label:'GYM'},
                  {value:'3',label:'Play Ground'},
                  {value:'4',label:'Other'}];

  constructor() { }

  ngOnInit() {
  }

}
