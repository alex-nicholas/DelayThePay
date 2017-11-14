import { Component, OnInit } from '@angular/core';
import { Layby } from '../../../models/layby';
import { LaybyService } from '../../../services/layby.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layby-list',
  templateUrl: './layby-list.component.html',
  styleUrls: ['./layby-list.component.css']
})
export class LaybyListComponent implements OnInit {
  
  id = 'New';
  laybys: Layby[];

  constructor(
    private _laybySvc: LaybyService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.laybys = this._laybySvc.getLaybys();
  }

  viewDetails(id: string) {
    this._router.navigateByUrl('/layby-profile/' + id);
  }

}
