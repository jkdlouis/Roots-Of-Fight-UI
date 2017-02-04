import { Routes, RouterModule } from "@angular/router";
import { TeesComponent } from "./tees/tees.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { LogoutComponent } from "./logout/logout.component";
import { OrdersComponent } from "./orders/orders.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'tees', component: TeesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'wishlist', component: WishlistComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);