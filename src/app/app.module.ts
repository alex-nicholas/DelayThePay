import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { DollarsPipe } from './Infrastructure/pipes/dollarPipe';
import { OrderItemDetailsComponent } from './features/order/order-item-details/order-item-details.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ProductService } from './services/product.service';
import { LaybyTotalComponent } from './features/layby/layby-total/layby-total.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { CustomerValidator } from './Infrastructure/validators/customer-validation.service';
import { DiscountComponent } from './features/discounts/discount.component';
import { DiscountDetailsComponent } from './features/discounts/discount-details/discount-details.component';
import { DiscountValidator } from './Infrastructure/validators/discount-validation.service';
import { DiscountService } from './services/discount.service';
import { PercentPipe } from '@angular/common/src/pipes/number_pipe';

@NgModule({
  declarations: [
    AppComponent,
    DollarsPipe,
    PercentPipe,
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
    ProductListComponent,
    DiscountComponent,
    DiscountDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule,
    DevExpressModule
  ],
  providers: [
    CustomerService,
    LaybyService,
    PaymentService,
    ProductService,
    DiscountService,
    CustomerValidator,
    DiscountValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
