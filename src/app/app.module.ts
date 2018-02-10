import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './menu/menu-list/delivery/delivery.component';
import { ReservationComponent } from './order/reservation/reservation.component';
import { PaymentComponent } from './menu/menu-list/delivery/payment/payment.component';
import { SharedComponent } from './shared/shared.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MenuItemComponent } from './menu/menu-list/menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu-list', component: MenuListComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'order', component: OrderComponent }, 
    { path: 'delivery', component: DeliveryComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'menu', component: MenuComponent }

];

@NgModule({
    declarations: [AppComponent, ServerComponent, ServersComponent, NavbarComponent, CarouselComponent, MenuListComponent, ReviewComponent, HomeComponent, OrderComponent, DeliveryComponent, ReservationComponent, PaymentComponent, SharedComponent, DropdownDirective, MenuItemComponent, MenuComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
