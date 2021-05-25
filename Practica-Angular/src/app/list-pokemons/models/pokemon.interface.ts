export interface CharacterInterface {
    id: number;
    name: string;
    url: string;
    image: string;
  }
  
  export interface CharacterResponseInterface {
    count: number;
    next: string;
    previous: string;
    results: CharacterInterface[];
  }