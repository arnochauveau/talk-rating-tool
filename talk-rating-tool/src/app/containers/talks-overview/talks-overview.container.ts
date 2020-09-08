import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/app/reducer';
import { ratingChanged, loadTalks } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-talks-overview',
  templateUrl: './talks-overview.container.html',
  styleUrls: ['./talks-overview.container.scss'],
})
export class TalksOverviewContainer implements OnInit {
  data$ = this.store.select(
    (state: { appState: State }) => state.appState.talks
  );

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTalks());
  }

  onTalkRatingUpdated({ id, newRating }) {
    this.store.dispatch(ratingChanged({ id, rating: newRating }));
  }
}
