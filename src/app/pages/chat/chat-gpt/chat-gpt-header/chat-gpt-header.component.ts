import { Component } from '@angular/core';

@Component({
  selector: 'pwa-chat-gpt-header',
  templateUrl: './chat-gpt-header.component.html',
  styleUrls: ['./chat-gpt-header.component.scss']
})
export class ChatGptHeaderComponent {
  currentIndex: number = 1;
  searchValue = '';
  gptMenuNav: {
    id: number,
    name: string,
    icon: string,
  }[] = [
    {
      id: 1,
      icon:"fa-solid fa-robot",
      name: 'robot'
    },
    {
      id: 2,
      icon: "fa-regular fa-circle-question",
      name: 'question'
    },
    {
      id: 3,
      icon: "fa-solid fa-location-dot",
      name: 'location'
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

  handleInputChange(inputValue: any) {
    console.log('Input Value:', inputValue.detail);
    this.searchValue = inputValue.detail
  }
}
