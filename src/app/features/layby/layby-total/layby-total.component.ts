import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layby-total',
  templateUrl: './layby-total.component.html',
  styleUrls: ['./layby-total.component.css']
})
export class LaybyTotalComponent implements OnInit {

  @Input() totalLaybyValue: number;

  constructor() { }

  ngOnInit() {
  }

}
