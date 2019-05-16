import {Component} from '@angular/core';
import {Member} from "../../models/member";
import {MemberProvider} from "../../providers/member/member";

@Component({
  selector: 'member',
  templateUrl: 'member.html'
})
export class MemberComponent {

  members: Member[];

  constructor(public memberService: MemberProvider) {
  }

  async ngOnInit() {
    try {
      const memberData = await this.memberService.getMember();
      if (Array.isArray(memberData)) {
        this.members = memberData;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
