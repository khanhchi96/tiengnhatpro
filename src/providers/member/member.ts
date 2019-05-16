import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Member} from "../../models/member";

@Injectable()
export class MemberProvider {

  members: Member[];
  constructor(public http: HttpClient) {
  }

  getMember(){
    return this.http.get("./assets/member.json").toPromise();
  }
}
