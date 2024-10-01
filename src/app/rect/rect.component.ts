import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  rectSize = input.required<rectSize>();
  rectSizeChange = output<rectSize>();
  // rectSize = model.required<rectSize>();

  onReset() {
    this.rectSizeChange.emit({
      height: '200',
      width: '200'
    })

    // this.rectSize.
  }
}

interface rectSize {
  width: string;
  height: string;
}