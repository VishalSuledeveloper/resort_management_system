import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountserviceService} from'./account//accountservice.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {FormserviceService} from'./form//formservice.service';
import {LogserviceService}from'./log//logservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
// import { ContactComponent } from 'src/app/account/contact/contact.component';
import { DivesComponent } from './dives/dives.component';
import { FoodsComponent } from './foods/foods.component';
// import { FormdetailsComponent } from 'src/app/form/formdetails/formdetails.component';
import { NewsComponent } from './news/news.component';
import { RoomsComponent } from './account/rooms/rooms.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './log/login/login.component';
import { AdminComponent } from './admin/admin.component';
// import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AccountModule } from './account/account.module';
import {FormModule} from './form/form.module';
import {LogModule} from './log/log.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HeaderComponent,
    // ContactComponent,
    DivesComponent,
    FoodsComponent,
    // FormdetailsComponent,
    NewsComponent,
    RoomsComponent,
    FooterComponent,
    // LoginComponent,
    AdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LogModule,
    AccountModule,
    AppRoutingModule,
    FormModule,
    // ContactComponent

   

    
    

  ],
  providers: [AccountserviceService,FormserviceService,LogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
