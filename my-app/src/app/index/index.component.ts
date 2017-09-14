import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  text:string='';
  constructor(
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    var val=this.route.snapshot.paramMap.get('val');
    this.text=val;
  }

}
