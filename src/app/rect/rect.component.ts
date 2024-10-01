import { Component, EventEmitter, Input, input, model, Output, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // rectSize = input.required<rectSize>();
  // rectSizeChange = output<rectSize>();

  // @Input({required: true}) rectSize!: rectSize;
  // @Output() rectSizeChange = new EventEmitter<rectSize>()
  rectSize = model.required<rectSize>();

  onReset() {
    this.rectSize.set({
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