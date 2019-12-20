import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  @Input() groupeName:String;
  constructor() { }

  ngOnInit() {
    this.groupeName = 'ipssi';
  }

}
