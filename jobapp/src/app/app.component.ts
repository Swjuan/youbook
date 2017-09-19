// import {Component, ViewChild} from '@angular/core';
// import {NavigationComponent} from "./navigation/navigation.component";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
//
//   @ViewChild(NavigationComponent) editor: NavigationComponent;
//
//   constructor() {}
//
//   publishTopic() {
//     let topicContent = this.editor.clickHandle();
//
//     if(!topicContent){
//       alert('请输入内容！');
//       return
//     }
//     alert(topicContent)
//   }
//
//   PostData(event):void {
//     console.log(event)
//   }
// }
//=======================上面是测试富文本的内容


import { Component, OnInit } from '@angular/core';
//导入服务
import { GlobalPropertyService } from './services/global-property.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //隐藏导航栏
  _hiddenNavs:boolean;
  constructor(
    private  glo:GlobalPropertyService
  ){}
  ngOnInit() {
    //初始化时不隐藏
    this._hiddenNavs = this.glo.hiddenNavs;
  }
  ngAfterContentChecked() {
    //在点击内容后隐藏
    this._hiddenNavs = this.glo.hiddenNavs;
  }
}

