import { Component, Input } from '@angular/core';
import { Speaker } from 'src/app/models/talk.interface';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {
  @Input() speaker: Speaker;
}
