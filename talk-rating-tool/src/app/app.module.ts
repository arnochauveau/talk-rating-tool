import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalksOverviewContainer } from './containers/talks-overview/talks-overview.container';
import { TalkComponent } from './components/talk/talk.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TalksOverviewContainer,
    TalkComponent,
    SpeakerComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
