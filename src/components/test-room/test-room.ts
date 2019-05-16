import {Component} from '@angular/core';
import {TestRoom} from "../../models/testRoom";
import {TestRoomProvider} from "../../providers/testRoom/testRoom";
import {NavController} from "ionic-angular";

@Component({
  selector: 'test-room',
  templateUrl: 'test-room.html'
})
export class TestRoomComponent {
  testRooms: TestRoom[];


  constructor(public testRoomService: TestRoomProvider, public navCtrl: NavController) {
  }

  async ngOnInit() {
    try {
      const testRoomData = await this.testRoomService.getTestRoom();
      if (Array.isArray(testRoomData)) {
        this.testRooms = testRoomData;
        console.log(this.testRooms)
      }
    } catch (e) {
      console.error(e);
    }
  }

  goToTestPage(level){
    this.navCtrl.push('TestPage', {level: level});
  }

}
