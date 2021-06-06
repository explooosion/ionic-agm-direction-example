import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any = 'Taichung Railway Station, Taiwan';
  public destination: any = 'Wenxin Forest Park, Taiwan';

  constructor() { }

  ngOnInit() {}

}
