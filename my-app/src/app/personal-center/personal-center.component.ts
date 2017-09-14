import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
  _val:string='';
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  toIndex(){
    this.router.navigate(['/index',this._val]);
  }
}
