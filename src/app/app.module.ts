import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ProductComponent } from './product/product.component';
//import { MembersComponent } from './members/members.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';
import { sortPipe } from './app.sort';
import { CommonServiceService } from './common-service.service';
import { MemberContactComponent } from './member-contact/member-contact.component';
import { MemberTeamComponent } from './member-team/member-team.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    sortPipe,
    routingComponent,
    MemberContactComponent,
    MemberTeamComponent,
    UsersComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
 ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
