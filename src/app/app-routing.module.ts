import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowtempComponent } from './showtemp/showtemp.component';
import { GettempComponent } from './gettemp/gettemp.component';


const routes: Routes = 
[
  {path:'showtemp',component:ShowtempComponent},
  {path:'gettemp/:city',component:GettempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ShowtempComponent]
