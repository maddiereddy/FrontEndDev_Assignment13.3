import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HeaderComponent }   from './header/header.component';
import { HomeComponent }   from './home/home.component';
import { RolesComponent }   from './roles/roles.component';
import { AboutComponent }   from './about/about.component';
import { ContactComponent }   from './contact/contact.component';
import { PageNotFoundComponent } from './not-found.component';
import { AdminComponent } from './roles/admin.component';
import { SuperAdminComponent } from './roles/superadmin.component';
import { MemberComponent } from './roles/member.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'roles', component: RolesComponent, children: [
        { path: '', component: AdminComponent },
        { path: 'admin', component: AdminComponent },
        { path: 'superadmin', component: SuperAdminComponent },
        { path: 'member', component: MemberComponent }
    ] },
    { path: 'header', component: HeaderComponent  },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

