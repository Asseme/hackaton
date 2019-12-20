import { Component, OnInit } from '@angular/core';
import { Groupe } from '../models/Groupe.model';
import { Subscription } from 'rxjs';
import { GroupeService } from '../services/GroupeService';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css']
})
export class GroupeListComponent implements OnInit {
  groupes:Groupe[];
  groupeSubscription: Subscription;
  constructor(private groupeService:GroupeService) { 

  }

  ngOnInit() {
    this.groupeSubscription = this.groupeService.GroupeSubject.subscribe(
      (groupes:Groupe[]) => {
        this.groupes = groupes;
      }
    );
    this.groupeService.emitGroupes();
  }

}
