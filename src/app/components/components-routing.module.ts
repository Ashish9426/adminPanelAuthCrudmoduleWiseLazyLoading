import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdermenuComponent } from '../components/ordermenu/ordermenu.component';
import { OrdernowComponent } from '../components/ordernow/ordernow.component';


const routes: Routes = [
  {path:'ordermenu', component:OrdermenuComponent},
  {path:"ordernow",component:OrdernowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
