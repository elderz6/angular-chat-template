import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { ChatRowComponent } from './chat-row/chat-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChatBarComponent,
    ChatBoxComponent,
    ChatMainComponent,
    ChatRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
