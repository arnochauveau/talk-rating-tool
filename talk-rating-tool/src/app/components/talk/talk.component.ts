import { Component, Input } from '@angular/core';
import { Talk } from 'src/app/models/talk.interface';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
})
export class TalkComponent {
  @Input() talk: Talk;
}
