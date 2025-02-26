import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CardCharacterComponent } from './components/card-character/card-character.component';



@NgModule({
  declarations: [CardCharacterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    CardCharacterComponent
  ],
  providers: [HttpService]
})
export class SharedModule { }
