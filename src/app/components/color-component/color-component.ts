import { Component } from '@angular/core';
import { ColorBlockComponent } from "../color-block-component/color-block-component";

@Component({
  selector: 'app-color-component',
  imports: [ColorBlockComponent],
  templateUrl: './color-component.html',
  styleUrl: './color-component.css'
})
export class ColorComponent {

}
