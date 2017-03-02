import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './app/pages/posts/posts.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
