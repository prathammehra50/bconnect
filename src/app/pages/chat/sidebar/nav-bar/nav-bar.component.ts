import { Component } from '@angular/core';

@Component({
  selector: 'pwa-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  currentIndex: number = 1;

  navData: {
    id: number,
    name: string,
    icon: string,
    seprator?: boolean
  }[] = [
    {
    id: 1,
    name: 'chat',
    icon: "fa-regular fa-message" 
  },
  {
    id: 2,
    name: 'megaphone',
    icon:"fa-solid fa-bullhorn"
  },
  {
    id: 3,
    name: 'folder',
    icon:"fa-regular fa-folder"
  },
  {
    id: 4,
    name: 'diary',
    icon: "fa-solid fa-book"
  },
  {
    id: 5,
    name: 'wechat',
    icon: "fa-brands fa-weixin",
    seprator: true
  },
  {
    id: 6,
    name: 'dropbox',
    icon: "fa-brands fa-dropbox"
  },
  {
    id: 7,
    name: 'dropbox',
    icon: "fa-solid fa-chart-simple"
  },
  {
    id: 8,
    name: 'dropbox',
    icon: "fa-solid fa-headphones-simple"
  }
  ]

  updateCurrentIndex(index: number) {
    this.currentIndex = index;
  }

}
