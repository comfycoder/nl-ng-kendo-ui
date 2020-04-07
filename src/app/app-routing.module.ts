import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'launch',
    component: LaunchComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Welcome!'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About NUVALUNO LLC'
    }
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
