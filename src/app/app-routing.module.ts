import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { CustomerProfileComponent } from './features/customer/customer-profile/customer-profile.component';
import { LaybyProfileComponent } from './features/layby/layby-profile/layby-profile.component';
import { CustomerListComponent } from './features/customer/customer-list/customer-list.component';
import { LaybyListComponent } from './features/layby/layby-list/layby-list.component';
import { MakePaymentComponent } from './features/payments/make-payment/make-payment.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent, pathMatch: 'full'},
  { path: 'products', component: ProductListComponent, pathMatch: 'full' },
  { path: 'customer-profile/:id', component: CustomerProfileComponent },
  { path: 'laybys', component: LaybyListComponent, pathMatch: 'full' },
  { path: 'layby-profile/:id', component: LaybyProfileComponent },
  { path: 'make-payment/:id', component: MakePaymentComponent },
  { path: 'product-profile/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
