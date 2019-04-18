import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {AddrecordComponent} from './components/addrecord/addrecord.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'add', component: AddrecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
