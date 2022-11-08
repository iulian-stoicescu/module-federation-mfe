import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'module-federation-mfe';

  // We want to navigate to a path in the shell app but the local router can see only the paths present in the local routing module.
  // The easiest solution for this is to use window events because the mfe and shell apps are in the same window so this is a
  // convenient way of communication. ( Another solution would be to use the ngrx store, but that might be more complicated and also is not
  // available for mfe and shell apps with different frameworks )
  navigateToHome() {
    const customEvent = new CustomEvent('pathSelectedFromTestMfe', {detail: {path: 'home'}});
    window.dispatchEvent(customEvent);
  }
}
