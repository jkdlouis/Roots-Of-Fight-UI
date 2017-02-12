import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { TeesComponent } from './tees/tees.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from "./signup/signup.component";
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/authentication.service';
import { UserComponent } from './header/user/user.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { UserProfileComponent } from './header/user/user-profile/user-profile.component';
import { UserProfileEditComponent } from './header/user/user-profile-edit/user-profile-edit.component';

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
        UserProfileEditComponent
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
