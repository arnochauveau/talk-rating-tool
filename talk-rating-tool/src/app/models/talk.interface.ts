export interface Talk {
  id: number;
  title: string;
  speaker: Speaker;
  rating: number;
}

export interface Speaker {
  name: string;
  imageUrl: string;
}
