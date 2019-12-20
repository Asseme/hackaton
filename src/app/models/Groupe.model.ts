import { Etudiant } from './Etudiant.model';

export class Groupe{
    constructor(public name:string,
        public projet:string,
        public description:string,
        public etudiants:Etudiant[]){}
        
}