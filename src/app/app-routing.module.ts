
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { RouterModule,Routes } from '@angular/router';
import {MemberContactComponent } from './member-contact/member-contact.component';
import {MemberTeamComponent } from './member-team/member-team.component';
const routes: Routes =  [
    { path: 'member', component: MembersComponent,
              children:[
                { path: 'contact', component: MemberContactComponent },
                { path: 'team', component: MemberTeamComponent },
              ]
   },
  {  path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
 ],
 exports:[
 RouterModule
 ],

})
export class AppRoutingModule { }
export const routingComponent = [ProductComponent,MembersComponent,MemberContactComponent,MemberTeamComponent];
