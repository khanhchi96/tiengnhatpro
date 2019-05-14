import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Member} from "../../modals/member";
import {MemberProvider} from "../../providers/member/member";
import {TestProvider} from "../../providers/test/test";
import {Test} from "../../modals/test";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  members: Member[];
  tests: Test[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberService: MemberProvider,
              public testService: TestProvider) {
  }

  async ionViewDidLoad() {
    try {
      const memberData = await this.memberService.getMember();
      const testData = await this.testService.getTest();
      if (Array.isArray(memberData)) {
        this.members = memberData;
      }
      if (Array.isArray(testData)) {
        this.tests = testData;
      }
    } catch (e) {
      console.error(e);
    }
  }

  showRankingTable() {
    document.getElementById("ranking").style.display = 'block';
    document.getElementById("testing").style.display = 'none';
    document.getElementById("rankingBtn").style.color = 'green';
    document.getElementById("testingBtn").style.color = 'black'
  }

  showTestRoomTable() {
    document.getElementById("ranking").style.display = 'none';
    document.getElementById("testing").style.display = 'block';
    document.getElementById("rankingBtn").style.color = 'black';
    document.getElementById("testingBtn").style.color = 'green'
  }

}
