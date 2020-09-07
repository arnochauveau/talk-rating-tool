import { Component, OnInit } from '@angular/core';
import { Talk } from 'src/app/models/talk.interface';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TalkRepoService } from 'src/app/services/talk-repo.service';

@Component({
  selector: 'app-talks-overview',
  templateUrl: './talks-overview.container.html',
  styleUrls: ['./talks-overview.container.scss'],
})
export class TalksOverviewContainer implements OnInit {
  data$: Observable<Talk[]>;

  constructor(private talkRepo: TalkRepoService) {}

  ngOnInit() {
    this.data$ = this.talkRepo.getTalks();
  }

  onTalkRatingUpdated({ id, newRating }) {
    this.data$ = this.talkRepo
      .updateTalk({ id, rating: newRating })
      .pipe(switchMap(() => this.talkRepo.getTalks()));
  }
}
