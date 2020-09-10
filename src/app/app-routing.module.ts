import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
export const appRoutes: Routes = [

  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},

  // {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent, children:[
    {path:':id/:name', component: UserComponent},
  ]},
  {path:'servers',
  // canActivate:[AuthGuard],
  canActivateChild:[AuthGuard],
  component: ServersComponent,
  children:[
    {path:':id', component: ServerComponent, resolve: { server: ServerResolverService }},
    {path:':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuardService]}
  ]},

  {path:'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path:'shopping-list', component: ShoppingListComponent},


  // {path:'not-found', component:PageNotFoundComponent},
  {path:'not-found', component:ErrorPageComponent, data:{message:'Page not found!'}},
  // {path:'something', redirectTo:'/not-found'},
  // {path:'**', redirectTo:'/not-found'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
