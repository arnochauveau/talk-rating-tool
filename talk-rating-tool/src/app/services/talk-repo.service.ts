import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Talk } from '../models/talk.interface';

@Injectable({
  providedIn: 'root',
})
export class TalkRepoService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getTalks() {
    return this.httpClient.get<Talk[]>(`${this.baseUrl}/talks`);
  }

  updateTalk(talk: Partial<Talk>) {
    return this.httpClient.patch(`${this.baseUrl}/talks/${talk.id}`, {
      ...talk,
    });
  }
}
