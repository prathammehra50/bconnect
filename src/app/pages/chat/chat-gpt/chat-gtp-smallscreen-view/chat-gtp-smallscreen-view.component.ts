import { Component } from '@angular/core';

@Component({
  selector: 'pwa-chat-gtp-smallscreen-view',
  templateUrl: './chat-gtp-smallscreen-view.component.html',
  styleUrls: ['./chat-gtp-smallscreen-view.component.scss']
})
export class ChatGtpSmallscreenViewComponent {
  currentIndex: number = 1;
  smallGptMenuNav: {
    id: number,
    name: string,
    icon: string,
  }[] = [
    {
      id: 1,
      icon:"fa-solid fa-magnifying-glass",
      name: 'search'
    },
    {
      id: 2,
      icon: "fa-regular fa-clipboard",
      name: 'clipboard'
    },
    {
      id: 3,
      icon: "fa-regular fa-circle-question",
      name: 'question'
    },
    {
      id: 4,
      icon: "fa-solid fa-circle-info",
      name: 'information'
    },
    {
      id: 5,
      icon: "fa-solid fa-circle-info",
      name: 'bell'
    },
    {
      id: 6,
      icon: "fa-solid fa-lock",
      name: 'bell'
    }
  ]

  updateCurrentIndex(index: number) {
    this.currentIndex = index;
  }
}
