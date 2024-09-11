import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaclasePage } from './nuevaclase.page';

describe('NuevaclasePage', () => {
  let component: NuevaclasePage;
  let fixture: ComponentFixture<NuevaclasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
