import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseIconComponent } from './ase-icon.component';

describe('AseIconComponent', () => {
  let component: AseIconComponent;
  let fixture: ComponentFixture<AseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AseIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
