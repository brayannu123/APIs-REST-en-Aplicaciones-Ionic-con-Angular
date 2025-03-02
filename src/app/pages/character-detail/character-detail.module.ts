import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';

import { CharacterDetailPage } from './character-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CharacterDetailPageRoutingModule
  ],
  declarations: [CharacterDetailPage]
})
export class CharacterDetailPageModule { }
