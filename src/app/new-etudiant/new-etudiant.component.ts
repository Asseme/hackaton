import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validator, Validators} from '@angular/forms';
import { Etudiant } from '../models/Etudiant.model';
import { EtudiantService } from '../services/EtudiantService';
import { Router } from '@angular/router';
import { WrappedNodeExpr } from '@angular/compiler';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {
  etudiantForm : FormGroup;
  constructor(private formBuilder: FormBuilder,
    private etudiantService:EtudiantService,
    private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.etudiantForm = this.formBuilder.group({
      firstName:['',Validators.required ],
      lastName:['',Validators.required ],
      email:['',[Validators.required,Validators.email] ],
      classe:['',Validators.required ]
    })
  }

  onSubmitForm(){
    const formValue= this.etudiantForm.value;
    const newEtudiant = new Etudiant(
      formValue['firtName'],
      formValue['lastName'],
      formValue['email'],
      formValue['classe']
    )
    this.etudiantService.addEtudiant(newEtudiant);
    // this.router.navigate(['/etudiants'])
  }

}
