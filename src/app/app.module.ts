import { NgModule, isDevMode , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  '../assets/web-components/bundle.js'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChatComponent } from './pages/chat/chat.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavLogoComponent } from './pages/chat/sidebar/nav-logo/nav-logo.component';
import { NavBarComponent } from './pages/chat/sidebar/nav-bar/nav-bar.component';
import { HeaderComponent } from './pages/chat/chat-type/header/header.component';
import { BodyComponent } from './pages/chat/chat-type/body/body.component';
import { ChatGptHeaderComponent } from './pages/chat/chat-gpt/chat-gpt-header/chat-gpt-header.component';
import { ChatGptBodyComponent } from './pages/chat/chat-gpt/chat-gpt-body/chat-gpt-body.component';
import { LiveChatHeaderComponent } from './pages/chat/live-chat/live-chat-header/live-chat-header.component';
import { LiveChatBodyComponent } from './pages/chat/live-chat/live-chat-body/live-chat-body.component';
import { CustomerInfoHeaderComponent } from './pages/chat/customer-info/customer-info-header/customer-info-header.component';
import { CustomerInfoBodyComponent } from './pages/chat/customer-info/customer-info-body/customer-info-body.component';
import { RightsideBarHeaderComponent } from './pages/chat/rightside-bar/rightside-bar-header/rightside-bar-header.component';
import { RightsideBarBodyComponent } from './pages/chat/rightside-bar/rightside-bar-body/rightside-bar-body.component';
import { ChatGtpSmallscreenViewComponent } from './pages/chat/chat-gpt/chat-gtp-smallscreen-view/chat-gtp-smallscreen-view.component';
import { MobileViewChatHeaderComponent } from './pages/chat/mobile-view/mobile-view-chat-header/mobile-view-chat-header.component';
import { MobileViewChatContentComponent } from './pages/chat/mobile-view/mobile-view-chat-content/mobile-view-chat-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AboutComponent,
    NotFoundComponent,
    NavLogoComponent,
    NavBarComponent,
    HeaderComponent,
    BodyComponent,
    ChatGptHeaderComponent,
    ChatGptBodyComponent,
    LiveChatHeaderComponent,
    LiveChatBodyComponent,
    CustomerInfoHeaderComponent,
    CustomerInfoBodyComponent,
    RightsideBarHeaderComponent,
    RightsideBarBodyComponent,
    ChatGtpSmallscreenViewComponent,
    MobileViewChatHeaderComponent,
    MobileViewChatContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
