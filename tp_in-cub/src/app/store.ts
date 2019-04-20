export class Startup {
  id: number;
  name: string;
  sector: string;
  representative: string;
  nbCoFounders: number;
  description: string;
  address: string;
  consultant: Consultant;


  constructor(id: number, name: string, sector: string, representative: string, nbCoFounders: number, description: string, address: string, consultant: Consultant) {
    this.id = id;
    this.name = name;
    this.sector = sector;
    this.representative = representative;
    this.nbCoFounders = nbCoFounders;
    this.description = description;
    this.address = address;
    this.consultant = consultant;
  }
}

export class Login {
  id: string;
  ttl: number;
  created: string;
  userId: string;

  constructor(id: string, ttl: number, created: string, userId: string){
    this.id = id;
    this.ttl = ttl;
    this.created = created;
    this.userId = userId;
  }
}

export class Consultant {
  id: number;
  surname: string;
  name: string;
  description: string;


  constructor(id: number, surname: string, name: string, description: string) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.description = description;
  }
}
