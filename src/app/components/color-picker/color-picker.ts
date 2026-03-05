import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme-service';
import { CommonModule } from '@angular/common';
interface ThemeColor {
  name: string;
  value: string;
  class: string;
}
@Component({
  selector: 'app-color-picker',
  imports: [MatIconModule, CommonModule],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss',
})
export class ColorPicker {
  constructor(public themeService: ThemeService) {}

  colorPicker = signal(false);

  colors: ThemeColor[] = [
    { name: 'red', value: '#ea2208', class: 'theme-red' },
    { name: 'green', value: '#22c55e', class: 'theme-green' },
    { name: 'blue', value: '#2563eb', class: 'theme-blue' },
  ];

  togglePicker() {
    this.colorPicker.set(!this.colorPicker());
  }
  selectColor(color: ThemeColor) {
    this.themeService.setColor(color);
    this.colorPicker.set(false);
  }
}
