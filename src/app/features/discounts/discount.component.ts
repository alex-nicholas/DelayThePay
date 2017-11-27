import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../services/discount.service';
import { DiscountValidator } from '../../Infrastructure/validators/discount-validation.service';
import { Discount } from '../../models/discount';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'dtp-discounts',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discounts: Discount[];
  constructor(
    private _discountSvc: DiscountService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._discountSvc.getDiscounts()
      .subscribe((data) => {
        this.discounts = data;
      });
  }

  viewDetails(id: string) {
    this._router.navigateByUrl('/discount-details/' + id);
  }
}
