import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaybyService } from '../../../services/layby.service';
import { Layby } from '../../../models/layby';

@Component({
  selector: 'app-customer-laybys',
  templateUrl: './customer-laybys.component.html',
  styleUrls: ['./customer-laybys.component.css']
})
export class CustomerLaybysComponent implements OnInit {
  customerId:string;
  laybys: Layby[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _laybySvc: LaybyService
  ) { }

  ngOnInit() {
    this.customerId = this._route.snapshot.params['id'];
    this.laybys = this._laybySvc.getLaybysForCustomer(this.customerId);
  }

  viewDetails(id: string) {
    this._router.navigateByUrl('/layby-profile/' + id);
  }
}
