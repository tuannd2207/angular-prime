import {AfterViewInit, Component, ElementRef, inject, input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ase-icon',
  standalone: true,
  imports: [],
  templateUrl: './ase-icon.component.html',
  styleUrl: './ase-icon.component.scss'
})
export class AseIconComponent implements AfterViewInit {
  private renderer = inject(Renderer2)
  @ViewChild('iconRef', {static: true}) iconRef!: ElementRef;
  iconName = input.required<string>();
  width = input.required<string>();
  height = input.required<string>();

  ngAfterViewInit(): void {
    console.log(this.iconRef);
    this.renderer.setStyle(this.iconRef.nativeElement, 'width', this.width());
    this.renderer.setStyle(this.iconRef.nativeElement, 'height', this.height());
  }

}
