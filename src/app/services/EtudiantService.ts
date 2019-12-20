import { Etudiant } from '../models/Etudiant.model';
import { Subject } from 'rxjs';

export class EtudiantService{
    private etudiants:Etudiant[]=[{
        firstName:'Asseme',
        lastName:'Nguessan',
        email:'nguessanasseme@gmail.com',
        classe:'eiswi'
    }];
    EtudiantSubject = new Subject<Etudiant[]>();

    emitEtudiants(){
        this.EtudiantSubject.next(this.etudiants.slice());
    }

    addEtudiant(etudiant:Etudiant){
        this.etudiants.push(etudiant);
        this.emitEtudiants;
    }
}