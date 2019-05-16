import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TestRoom} from "../../models/testRoom";


@Injectable()
export class TestRoomProvider {

  testRooms: TestRoom[];
  constructor(public http: HttpClient) {
  }

  getTestRoom(){
    return this.http.get("./assets/testRoom.json").toPromise();
  }
}
