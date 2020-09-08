import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalksOverviewContainer } from './containers/talks-overview/talks-overview.container';
import { TalkComponent } from './components/talk/talk.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { RatingComponent } from './components/rating/rating.component';
import { NavigationContainer } from './containers/navigation/navigation.container';
import { StoreModule } from '@ngrx/store';
import * as fromAppReducer from './reducers/app/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TalksOverviewContainer,
    TalkComponent,
    SpeakerComponent,
    RatingComponent,
    NavigationContainer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: fromAppReducer.reducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
