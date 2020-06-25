import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent} from './contactform/contactform.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
	{
		path:"contactform", component: ContactformComponent
	},{
		path:"blogpage", component: BlogpageComponent
	}
	,{
		path:"aboutpage", component: AboutpageComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
