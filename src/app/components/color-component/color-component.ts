import { Component, inject, OnInit } from '@angular/core';
import { ColorBlockComponent } from "../color-block-component/color-block-component";
import { Color } from '../../models/color';
import { ColorService } from '../../services/color-service';

@Component({
  selector: 'app-color-component',
  imports: [ColorBlockComponent],
  templateUrl: './color-component.html',
  styleUrl: './color-component.css'
})
export class ColorComponent implements OnInit {

  colorService: Color = inject(ColorService);

  colors: Color[] = [];

  ngOnInit(): void {
    this.colors = this.colorService.getColors();
  }
}
