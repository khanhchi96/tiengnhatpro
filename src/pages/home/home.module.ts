import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {MemberProvider} from "../../providers/member/member";
import {HttpClientModule} from "@angular/common/http";
import {TestRoomProvider} from "../../providers/testRoom/testRoom";
import {MemberComponent} from "../../components/member/member";
import {TestRoomComponent} from "../../components/test-room/test-room";

@NgModule({
  declarations: [
    HomePage,
    MemberComponent,
    TestRoomComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpClientModule
  ],

  entryComponents: [
    HomePage,
    MemberComponent,
    TestRoomComponent
  ],

  providers: [
    MemberProvider,
    TestRoomProvider
  ]
})
export class HomePageModule {}
