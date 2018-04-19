import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

// Component
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


// Services
import { ResolverService } from './resolver.service';
import { UserResolverService } from './user-resolver.service';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'producto',
    component: ProductoComponent,
    resolve: {
      logs: ResolverService
    }
  },
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {
      user: UserResolverService
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [ResolverService, UserResolverService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
