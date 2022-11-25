import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { AddServerComponent } from './add-server/add-server.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponentComponent,
    WarningComponentComponent,
    AddServerComponent,
    CustomComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
