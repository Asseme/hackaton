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
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EformComponent,
    EtudiantListComponent,
    GroupeComponent,
    NewEtudiantComponent
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
    MatFormFieldModule

  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
