import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TestProvider {

  constructor(public http: HttpClient) {
  }

  getTest(){
   return this.http.get("./assets/test.json").toPromise();
  }

}
