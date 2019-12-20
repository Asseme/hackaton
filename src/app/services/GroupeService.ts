import {Etudiant} from '../models/Etudiant.model';
import {Groupe} from '../models/Groupe.model';
import { Subject, from } from 'rxjs';
export class GroupeService{
    private groupes: Groupe[] = [{
        name:'Groupe 1',
        projet:'',
        description:'',
        etudiants: [
            {
                firstName:'Asseme',
                lastName:'Nguessan',
                email:'nguessanasseme@gmail.com',
                classe:'eiswi'
            },
            {
                firstName:'Asseme',
                lastName:'Nguessan',
                email:'nguessanasseme@gmail.com',
                classe:'eiswi'
            }
        ]
    }];

    GroupeSubject = new Subject<Groupe[]>();
    emitGroupes(){
        this.GroupeSubject.next(this.groupes.slice());
    }

    addGroupe(groupe:Groupe){
        this.groupes.push(groupe);
        this.emitGroupes;
    }
}