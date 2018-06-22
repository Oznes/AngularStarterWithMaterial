
import { InfoServiceService } from './monuments/info-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderFormComponent } from './component/order-form/order-form.component';
import {HttpModule} from '@angular/http';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {DarkSkyApi} from 'dark-sky-api';


//material ui components
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule, MatCardModule } from '@angular/material'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';



//imported for routing purposes (components alone)
import { MyIndexComponent } from './component/my-index/my-index.component';
import { ConfirmationPageComponent } from './component/confirmation-page/confirmation-page.component';
import { AboutComponent} from './component/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    MyIndexComponent,
    ConfirmationPageComponent,
    AboutComponent
 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    //material ui
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    
    RouterModule.forRoot([
     { path:'',component: MyIndexComponent},
     { path:'order',component: OrderFormComponent},
     { path:'confirmation',component:ConfirmationPageComponent},
     { path:'about',component: AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
