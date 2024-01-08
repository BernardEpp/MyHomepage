import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  @Output()
  isBurgerExpanded = false;

  ngOnInit(): void {
    this.isBurgerExpanded = false;
  }

  onBurgerClick() {
    console.log('clicked burger');
    this.isBurgerExpanded = !this.isBurgerExpanded;
  }
}
