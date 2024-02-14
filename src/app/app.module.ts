import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRosaComponent } from './card-rosa/card-rosa.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRosaButtonComponent } from './card-rosa-button/card-rosa-button.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
