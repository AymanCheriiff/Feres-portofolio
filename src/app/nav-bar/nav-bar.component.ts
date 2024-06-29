import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  expanded: boolean = false;
  rot: number = 360;

  expand() {
    const closeButton: HTMLElement = document.querySelector('#close-button') as HTMLElement;
    closeButton.style.transform = 'rotate(' + this.rot + 'deg)';
    this.rot += 360
    this.expanded = !this.expanded;
  }
}
