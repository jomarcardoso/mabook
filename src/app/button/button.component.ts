import { Component, Input, OnInit } from '@angular/core';

type color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  color: color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
