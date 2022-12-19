import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouteConfigLoadEnd, RouterModule, ROUTES } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
=======
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 0eabb8b3369ea56e0ea1823a16c668151c0a6d39

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
<<<<<<< HEAD
=======
    FooterComponent
>>>>>>> 0eabb8b3369ea56e0ea1823a16c668151c0a6d39
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
