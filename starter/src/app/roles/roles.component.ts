import { Component } from '@angular/core';

@Component({
    selector: 'my-roles',
    template: `
        <div>
            <h2 style="color:blue">Roles Component Page</h2>
            <nav class="navbar navbar-default">
                <ul class="nav navbar-nav">
                    <li><a routerLink="admin" routerLinkActive="active">Admin</a></li>
                    <li><a routerLink="superadmin" routerLinkActive="active">Super Admin</a></li>
                    <li><a routerLink="member" routerLinkActive="active">Member</a></li>
                </ul>
            </nav>
            <router-outlet></router-outlet>
        </div>`
})
export class RolesComponent {
}