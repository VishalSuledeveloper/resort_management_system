import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './account/contact/contact.component';
import { DivesComponent } from './dives/dives.component';
import { FoodsComponent } from './foods/foods.component';
import { FooterComponent } from './footer/footer.component';
import { FormdetailsComponent } from 'src/app/form/formdetails/formdetails.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './log/login/login.component';
import { NewsComponent } from './news/news.component';
import { RoomsComponent } from './account/rooms/rooms.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent 
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'dives',component:DivesComponent
  },
  {
    path:'foods',component:FoodsComponent
  },
  {
    path:'formdetails',component:FormdetailsComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'rooms',component:RoomsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'footer',component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
