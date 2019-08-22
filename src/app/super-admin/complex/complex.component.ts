import { Component, OnInit } from '@angular/core';
import { Wings } from '../../../Model/Wings';

import { Address } from '../../../Model/address';
import {ComplexDetails} from '../../../Model/Complex';
import { Facility } from '../../../Model/Facility';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {

  wings:Wings[]=[];
  wing:Wings ;
  address:Address = new Address('','','','',"");
  phone:string;
  email:string;
  facility:Facility[]=[];
  complex:ComplexDetails = new ComplexDetails("",[this.phone],this.address,"",[],[this.email],"",this.wings,"",[],this.facility);
  constructor() { }

  ngOnInit() {

  }



}
