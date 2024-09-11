import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroasistenciaPage } from './registroasistencia.page';

describe('RegistroasistenciaPage', () => {
  let component: RegistroasistenciaPage;
  let fixture: ComponentFixture<RegistroasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
