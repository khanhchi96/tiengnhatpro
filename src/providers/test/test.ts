import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Test} from "../../modals/test";


@Injectable()
export class TestProvider {

  test: Test[];
  constructor(public http: HttpClient) {
  }

  getTest(){
    return this.http.get("./assets/test.json").toPromise();
  }
}
