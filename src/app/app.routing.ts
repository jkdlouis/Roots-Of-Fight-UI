import { Routes, RouterModule } from "@angular/router";
import { TeesComponent } from "./pages/products/tees/tees.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { WishlistComponent } from "./pages/wishlist/wishlist.component";
import { LoginComponent } from "./pages/login/login.component";
import { ForgotPasswordComponent } from "./pages/login/forgot-password/forgot-password.component";
import { UserProfileComponent } from "./pages/partials/header/user/user-profile/user-profile.component";
import { UserProfileEditComponent } from "./pages/partials/header/user/user-profile-edit/user-profile-edit.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

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
    { path: 'user-profile-edit', component: UserProfileEditComponent },
    { path: '**', component: NotFoundComponent }

];

export const Routing = RouterModule.forRoot(APP_ROUTES);