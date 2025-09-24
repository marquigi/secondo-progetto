import { Injectable } from '@angular/core';
import { COLORS } from '../data/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor() { }

  getColors() {
    return COLORS;
  }
}
