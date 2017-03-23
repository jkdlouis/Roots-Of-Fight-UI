import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { UserComponent } from './pages/user/user.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserProfileEditComponent } from './pages/user/user-profile-edit/user-profile-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarouselComponent } from './pages/partials/carousel/carousel.component';
import { ProductService } from "./service/product.service";
import { ErrorsComponent } from './pages/errors/errors.component';
import { ErrorService } from './service/errors.service';


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
        NotFoundComponent,
        ProductsComponent,
        CarouselComponent,
        ErrorsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        Routing,
        NgbModule.forRoot()
    ],
    providers: [AuthService, ProductService, ErrorService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
