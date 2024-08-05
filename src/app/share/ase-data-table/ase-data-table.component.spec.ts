import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseDataTableComponent } from './ase-data-table.component';

describe('AseDataTableComponent', () => {
  let component: AseDataTableComponent<any>;
  let fixture: ComponentFixture<AseDataTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AseDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AseDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
