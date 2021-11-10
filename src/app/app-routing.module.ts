import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { SubjectsFormComponent } from './components/subjects-form/subjects-form.component';
import { TeachersFormComponent } from './components/teachers-form/teachers-form.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'students-form',
    component: StudentsFormComponent,
    data: {title: 'Students Form'}
  },
  {
    path: 'subjects-form',
    component: SubjectsFormComponent,
    data: {title: 'Subjects Form'}
  },
  {
    path: 'teachers-form',
    component: TeachersFormComponent,
    data: {title: 'Teachers Form'}
  },
  {
    path: 'details',
    component: DetailsComponent,
    data: {title: 'Details'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
