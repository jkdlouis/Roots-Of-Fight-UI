import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HeaderComponent } from "./pages/partials/header/header.component";
import { FooterComponent } from './pages/partials/footer/footer.component';
import { TeesComponent } from './pages/products/tees/tees.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from "./pages/signup/signup.component";
import { OrdersComponent } from './pages/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './service/authentication.service';
import { UserComponent } from './pages/partials/header/user/user.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { UserProfileComponent } from './pages/partials/header/user/user-profile/user-profile.component';
import { UserProfileEditComponent } from './pages/partials/header/user/user-profile-edit/user-profile-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TeesComponent,
        HomeComponent,
        SignupComponent,
        OrdersComponent,
        WishlistComponent,
        LoginComponent,
        UserComponent,
        ForgotPasswordComponent,
        UserProfileComponent,
        UserProfileEditComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CarouselModule,
        ReactiveFormsModule,
        Routing
    ],
    providers: [AuthService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
