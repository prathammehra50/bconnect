import { Component } from '@angular/core';

@Component({
  selector: 'pwa-mobile-view-chat-content',
  templateUrl: './mobile-view-chat-content.component.html',
  styleUrls: ['./mobile-view-chat-content.component.scss']
})
export class MobileViewChatContentComponent {
  swipeMenu: {
    id: number,
    name: string,
    icon: string,
  }[] = [
    {
      id: 1,
      icon:"fa-solid fa-message",
      name: 'Chats'
    },
    {
      id: 2,
      icon:"fa-solid fa-address-book",
      name: 'Contacts'
    },
    {
      id:3,
      icon: "fa-solid fa-user-group",
      name: "users"
    },
    {
      id:4,
      icon: "fa-solid fa-gear",
      name: "settings"
    }
  ]
}
