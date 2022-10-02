import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllImageComponent } from './feature/all-image/all-image.component';

const routes: Routes = [
  {
    path:'',
    loadComponent:()=>import('./feature/all-image/all-image.component').then(c=>c.AllImageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
