import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './not-found.component';
import { AdminComponent } from './roles/admin.component';
import { SuperAdminComponent } from './roles/superadmin.component';
import { MemberComponent } from './roles/member.component';


@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent,
      AboutComponent, ContactComponent, RolesComponent, AdminComponent,
      MemberComponent, SuperAdminComponent, PageNotFoundComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
