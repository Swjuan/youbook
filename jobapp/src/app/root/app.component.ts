import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr_li=['first tab','second tab','third tab']
  tabs=['商品描述','用户评论','系统设置']
  tab_index=0;
  pagecount=10;
  arr_page_count=[];
  img_url="../../assets/img/1.jpg";
  a=12;
  constructor(){
    for(var i=1;i<this.pagecount;i++){
      this.arr_page_count.push(i);
    }
  }
}
