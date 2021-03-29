import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{
path: 'home',
component: HomeComponent,
},
{
path: 'contact',
component: ContactComponent,
},
{
path: 'blog',
component: BlogHomeComponent,
},
{
path: 'blog/detail/:id',
component: BlogItemDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }