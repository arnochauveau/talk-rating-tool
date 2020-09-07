import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Talk } from 'src/app/models/talk.interface';
import { TalkRepoService } from 'src/app/services/talk-repo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk-management',
  templateUrl: './talk-management.container.html',
  styleUrls: ['./talk-management.container.scss'],
})
export class TalkManagementContainer {
  talkForm = new FormGroup({
    title: new FormControl('', Validators.required),
    speakerName: new FormControl('', Validators.required),
    speakerImage: new FormControl('assets/arno.jpeg', Validators.required),
    rating: new FormControl(5, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  constructor(private talkRepo: TalkRepoService, private router: Router) {}

  onSubmit() {
    const talk: Partial<Talk> = {
      title: this.talkForm.value.title,
      rating: this.talkForm.value.rating,
      speaker: {
        name: this.talkForm.value.speakerName,
        imageUrl: this.talkForm.value.speakerImage,
      },
    };

    this.talkRepo
      .addTalk(talk)
      .subscribe((_) => this.router.navigateByUrl('/overview'));
  }
}
