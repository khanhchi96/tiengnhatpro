import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {MemberProvider} from "../../providers/member/member";
import {HttpClientModule} from "@angular/common/http";
import {TestProvider} from "../../providers/test/test";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpClientModule
  ],

  entryComponents: [
    HomePage,
  ],

  providers: [
    MemberProvider,
    TestProvider
  ]
})
export class HomePageModule {}
