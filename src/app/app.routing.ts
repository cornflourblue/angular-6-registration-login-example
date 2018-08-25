import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
