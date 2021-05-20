export interface CharacterInterface {
    id: number;
    name: string;
    url: string;
    image: string;
  }
  
  export interface CharacterResponseInterface {
    info: {
      count: number;
      next: string;
      offset: number;
      limit: number;
      prev: string;
    };
    results: CharacterInterface[];
  }