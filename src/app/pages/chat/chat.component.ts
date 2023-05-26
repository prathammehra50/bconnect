import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pwa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  showCustomerInfoBody = false;
  showSmallGptScreen = false;
  isMobileView = false;

  ngOnInit(): void {
    const windowWidth = window.innerWidth
    if(windowWidth > 1440){
      this.showCustomerInfoBody = true
    }
    if(windowWidth > 1024){
      this.showSmallGptScreen = true
    }
    if(windowWidth < 768) {
      this.isMobileView = true
    }
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.toggleCustomerInfoBodyVisibility();
  }

  toggleCustomerInfoBodyVisibility() {
    const screenWidth = window.innerWidth;
    this.showCustomerInfoBody = screenWidth > 1440;
    this.showSmallGptScreen = screenWidth > 1024
    this.isMobileView = screenWidth < 768
  }
}
