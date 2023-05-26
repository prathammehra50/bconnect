import { Component } from '@angular/core';

@Component({
  selector: 'pwa-customer-info-header',
  templateUrl: './customer-info-header.component.html',
  styleUrls: ['./customer-info-header.component.scss']
})
export class CustomerInfoHeaderComponent {
  currentIndex: number = 1;

  customerNavData: {
    id: number,
    name: string,
    icon: string,
    seprator?: boolean
  }[] = [
    {
    id: 1,
    name: 'id card',
    icon: "fa-regular fa-id-card"
  },
  {
    id: 2,
    name: 'coupon',
    icon: "fa-regular fa-file-lines"
  },
  {
    id: 3,
    name: 'folder',
    icon:"fa-regular fa-paper-plane"
  }
  ]
 updateCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
