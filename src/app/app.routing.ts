import { Routes, RouterModule } from "@angular/router";
import { TeesComponent } from "./tees/tees.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { OrdersComponent } from "./orders/orders.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./login/forgot-password/forgot-password.component";
import { UserProfileComponent } from "./header/user/user-profile/user-profile.component";
import { UserProfileEditComponent } from "./header/user/user-profile-edit/user-profile-edit.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'tees', component: TeesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', redirectTo:'/', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'forgotpassword', component: ForgotPasswordComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-profile-edit', component: UserProfileEditComponent }

];

export const Routing = RouterModule.forRoot(APP_ROUTES);