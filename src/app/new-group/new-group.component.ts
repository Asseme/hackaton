import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupeService } from '../services/GroupeService';
import { Router } from '@angular/router';
import { Groupe } from '../models/Groupe.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})

export class NewGroupComponent implements OnInit {
  groupeForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private groupeService:GroupeService,
    private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  
  initForm(){
    this.groupeForm = this.formBuilder.group({
      name:['',Validators.required ],
      sujet:['',Validators.required ],
      description:['',[Validators.required,Validators.email] ],
      etudiants:['']
    })
  }

  onSubmitForm(){
    const formValue= this.groupeForm.value;
    const newGroupe = new Groupe(
      formValue['name'],
      formValue['sujet'],
      formValue['description'],
      formValue['etudiants']
    )
    this.groupeService.addGroupe(newGroupe);
    // this.router.navigate(['/etudiants'])
  }
  

}
