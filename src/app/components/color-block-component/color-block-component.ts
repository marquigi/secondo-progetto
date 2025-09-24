import { Component, Input } from '@angular/core';
import { Color } from '../../models/color';

@Component({
  selector: 'app-color-block-component',
  imports: [],
  templateUrl: './color-block-component.html',
  styleUrl: './color-block-component.css'
})
export class ColorBlockComponent {
  @Input()
  color!: Color;
}
