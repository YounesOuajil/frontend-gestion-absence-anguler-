export class Student {
    nom: string;
    prenom: string;
    group: number;
    filier: string;
    isPresent: boolean;
  
    constructor(nom: string, prenom: string, group: number, filier: string, isPresent: boolean = false) {
      this.nom = nom;
      this.prenom = prenom;
      this.group = group;
      this.filier = filier;
      this.isPresent = isPresent;
    }
  }
  