import { Component, OnInit, OnDestroy } from '@angular/core';
import { Etudiant } from '../models/Etudiant.model';
import { Subscription } from 'rxjs';
import { EtudiantService } from '../services/EtudiantService';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit,OnDestroy {
  etudiants:Etudiant[]
  etudiantSubscription: Subscription;
  constructor(private etudiantService:EtudiantService) { }

  ngOnInit() {
    this.etudiantSubscription = this.etudiantService.EtudiantSubject.subscribe(
      (etudiants:Etudiant[]) => {
        this.etudiants = etudiants;
      }
    );
    this.etudiantService.emitEtudiants();
  }

  ngOnDestroy(){
    this.etudiantSubscription.unsubscribe();
  }

}
