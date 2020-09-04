import { Component } from '@angular/core';
import { Talk } from 'src/app/models/talk.interface';

@Component({
  selector: 'app-talks-overview',
  templateUrl: './talks-overview.container.html',
  styleUrls: ['./talks-overview.container.scss'],
})
export class TalksOverviewContainer {
  data: Talk[] = [
    {
      id: 0,
      title: 'React workshop',
      speaker: {
        name: 'Nick',
        imageUrl: 'assets/nick.jpeg',
      },
      rating: 1,
    },
    {
      id: 1,
      title: 'Angular workshop',
      speaker: {
        name: 'Arno',
        imageUrl: 'assets/arno.jpeg',
      },
      rating: 5,
    },
    {
      id: 2,
      title: 'Legacy software workshop',
      speaker: {
        name: 'Birger',
        imageUrl: 'assets/birger.jpeg',
      },
      rating: 3,
    },
    {
      id: 3,
      title: 'Javascript workshop',
      speaker: {
        name: 'Joey',
        imageUrl: 'assets/joey.jpeg',
      },
      rating: 4,
    },
  ];

  onTalkRatingUpdated({ id, newRating }) {
    this.data = this.data.map((talk) => {
      if (talk.id !== id) {
        return talk;
      }

      return { ...talk, rating: newRating };
    });
  }
}
