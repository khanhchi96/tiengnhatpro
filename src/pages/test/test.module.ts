import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import {HttpClientModule} from "@angular/common/http";
import {TestProvider} from "../../providers/test/test";
import {TestComponent} from "../../components/test/test";

@NgModule({
  declarations: [
    TestPage,
    TestComponent
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    HttpClientModule
  ],
  entryComponents: [
    TestPage,
    TestComponent
  ],
  providers: [
    TestProvider,
  ]
})
export class TestPageModule {}
