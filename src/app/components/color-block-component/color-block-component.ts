import { Component, Input, output } from '@angular/core';
import { Color } from '../../models/color';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-block-component',
  imports: [CommonModule],
  templateUrl: './color-block-component.html',
  styleUrl: './color-block-component.css'
})
export class ColorBlockComponent {
  @Input()
  color!: Color;

  interrutoreB = output<Color>();

  interrutoreA() {
    this.interrutoreB.emit(this.color!);
    this.color.active = !this.color.active;
  }
}
