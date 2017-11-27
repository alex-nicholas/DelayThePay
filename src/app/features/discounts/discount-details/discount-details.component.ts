import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Discount } from '../../../models/discount';
import { Observable } from 'rxjs/Observable';
import { DiscountService } from '../../../services/discount.service';
import { DiscountValidator } from '../../../Infrastructure/validators/discount-validation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DiscountValidationModel } from '../../../models/validation-models/discount-validation.model';

@Component({
  selector: 'dtp-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiscountDetailsComponent implements OnInit {
  discount: Discount;
  id: string;
  isNew: boolean = this.id === 'New';

  constructor(
    private _discountSvc: DiscountService,
    private _validator: DiscountValidator,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    if (this.isNew) {
      this.discount = new Discount();
    } else {
      this.discount = this.getDiscount(this.id);
    }
  }

  getDiscount(id: string): Discount {
    let discount: Discount;
    this._discountSvc.getDiscount(id).subscribe((object) => {
      discount = object;
    });
    return discount;
  }

  save(): DiscountValidationModel {
    if (this.isNew) {
      return this.create();
    } else {
      return this.update();
    }
  }

  private create(): DiscountValidationModel {
    return this._discountSvc.create(this.discount);
  }

  private update(): DiscountValidationModel {
    return this._discountSvc.update(this.discount);
  }

  delete() {
    this._discountSvc.delete(this.discount.Id);
  }
}
