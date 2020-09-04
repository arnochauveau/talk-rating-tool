import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalksOverviewContainer } from './containers/talks-overview/talks-overview.container';
import { TalkComponent } from './components/talk/talk.component';
import { SpeakerComponent } from './components/speaker/speaker.component';

@NgModule({
  declarations: [AppComponent, TalksOverviewContainer, TalkComponent, SpeakerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
