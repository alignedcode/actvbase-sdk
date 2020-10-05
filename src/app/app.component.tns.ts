import { Component } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page';
import { WebView } from 'tns-core-modules/ui/web-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.tns.html',
})

export class AppComponent {
  public webViewSrc = 'http://192.168.100.5:4200/';
  public scale = 100;
  public page: Page;
  public webView: WebView;

  public pageLoaded(args) {
    if (isAndroid) {
      this.page = <Page>args.object;
      this.webView = <WebView>this.page.getViewById('webView');
      this.webView.android.setInitialScale(this.scale);
      this.webView.android.getSettings().setDomStorageEnabled(true);
      this.webView.android.getSettings().setDatabaseEnabled(true);
      this.webView.android.getSettings().setDisplayZoomControls(false);
      this.webView.android.getSettings().setBuiltInZoomControls(false);
      this.webView.android.getSettings().setAllowFileAccessFromFileURLs(true);
      this.webView.android.getSettings().setAllowUniversalAccessFromFileURLs(true);
      this.webView.android.getSettings().setMediaPlaybackRequiresUserGesture(false);
      this.webView.android.getSettings().setUseWideViewPort(true);
    }
  }
}
