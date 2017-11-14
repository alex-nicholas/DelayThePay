import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './ui-modules/theme/theme.module';
import { DevExpressModule } from './ui-modules/dev-express/dev-express.module';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { CustomerProfileComponent } from './features/customer/customer-profile/customer-profile.component';
import { LaybyProfileComponent } from './features/layby/layby-profile/layby-profile.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LaybyListComponent } from './features/layby/layby-list/layby-list.component';
import { CustomerListComponent } from './features/customer/customer-list/customer-list.component';
import { CustomerService } from './services/customer.service';
import { LaybyService } from './services/layby.service';
import { MakePaymentComponent } from './features/payments/make-payment/make-payment.component';
import { PaymentService } from './services/payment.service';
import { CustomerLaybysComponent } from './features/customer/customer-laybys/customer-laybys.component';
import { DollarsPipe } from './Infrastructure/dollarPipe';
import { OrderItemDetailsComponent } from './features/order/order-item-details/order-item-details.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { LaybyTotalComponent } from './features/layby/layby-total/layby-total.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DollarsPipe,
    WelcomeComponent,
    CustomerProfileComponent,
    LaybyProfileComponent,
    DashboardComponent,
    LaybyListComponent,
    CustomerListComponent,
    MakePaymentComponent,
    CustomerLaybysComponent,
    OrderItemDetailsComponent,
    ProductDetailsComponent,
    LaybyTotalComponent,
    ProductListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    DevExpressModule
  ],
  providers: [
    CustomerService,
    LaybyService,
    PaymentService,
    OrderService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
