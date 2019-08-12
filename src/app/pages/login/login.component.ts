import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin = true;

  constructor( private route:Router ) { }

  ngOnInit() {
      if(this.isLogin)
      {

      }
  }

}
