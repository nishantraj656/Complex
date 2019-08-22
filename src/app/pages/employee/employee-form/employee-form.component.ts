import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  
  URL = "https://compagnons-constructeurs.fr/img/NoImageFound.png";



  constructor() { }

  ngOnInit() {
  }

  
}
