import { Routes } from '@angular/router';
import { CommonComponent } from './Main/common/common.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    { path: '', component: CommonComponent },
    { path: 'profile', component: ProfileComponent }
];
