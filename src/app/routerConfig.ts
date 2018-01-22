// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './task/components/task.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
];

export default appRoutes;