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

  colorService: ColorService = inject(ColorService);

  colors: Color[] = [];

  ngOnInit(): void {
    this.colors = this.colorService.getColors();
  }

  datoRicevuto(color: Color) {
    console.log("colori");
    this.colors = this.colors.map(c =>
      c.name === color.name ? color : c
    );
  }
}
