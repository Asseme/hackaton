import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TestComponent } from './test/test.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { EformComponent } from './eform/eform.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import {MatListModule} from '@angular/material/list';
import { GroupeComponent } from './groupe/groupe.component';
import {EtudiantService} from './services/EtudiantService';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import {ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupeListComponent } from './groupe-list/groupe-list.component';
const appRoutes: Routes=[
  {path:'etudiants',component:EtudiantListComponent },
  {path:'auth',component:AuthComponent},
  {path:'',component:EtudiantListComponent },
  {path:'new_etudiant',component:NewEtudiantComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EformComponent,
    EtudiantListComponent,
    GroupeComponent,
    NewEtudiantComponent,
    AuthComponent,
    NewGroupComponent,
    GroupeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
