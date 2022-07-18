import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Component({
  selector: 'app-nipunbharath',
  templateUrl: './nipunbharath.component.html',
  styleUrls: ['./nipunbharath.component.scss']
})
export class NipunbharathComponent implements OnInit {
  nipunBharathMetrics: any;

  constructor(private readonly _configService: ConfigService) {
    this.getnipunBharathMetricsData();
   }

  ngOnInit(): void {
  }
  
  onTabChanged($event: any): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      console.log('resize');
    }, 100);
  }    

  getnipunBharathMetricsData() {
    this._configService.getVanityMetrics('nib').subscribe(vanityMetricsRes => {
      this.nipunBharathMetrics = vanityMetricsRes.result;
    });
  }
}
