import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyService } from './services/my.service';
import { UserInfoModel } from './models/user-info.model';

const hardCodedUserId = 7;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'module-federation-mfe';

  userInfo: UserInfoModel;
  userInfoLoaded = false;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.getUserInfo(hardCodedUserId).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.userInfoLoaded = true;
    });
  }

  // We want to navigate to a path in the shell app but the local router can see only the paths present in the local routing module.
  // The easiest solution for this is to use window events because the mfe and shell apps are in the same window so this is a
  // convenient way of communication. ( Another solution would be to use the ngrx store, but that might be more complicated and also is not
  // available for mfe and shell apps with different frameworks )
  navigateToHome() {
    const customEvent = new CustomEvent('pathSelectedFromTestMfe', { detail: { path: 'home' } });
    window.dispatchEvent(customEvent);
  }
}
