import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SettingsComponent } from './settings/settings.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
{path: "about", component: AboutComponent},
{path: "contact", component: ContactComponent},
{path: "blogs", component: BlogsComponent},
{path: "register", component: RegisterComponent},
 
{path: "home", component: HomeComponent},
// {path: "", component: HomeComponent} // bad practice
{path: "", redirectTo: 'home', pathMatch: 'full'},

{path: 'settings', component:SettingsComponent, children: [
  {path:'web', component:WebComponent},
  {path:'mobile', component:MobileComponent},
]},





















{path: "**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
