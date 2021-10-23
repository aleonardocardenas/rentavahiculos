import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestistrarUsuariosComponent } from './restistrar-usuarios.component';

describe('RestistrarUsuariosComponent', () => {
  let component: RestistrarUsuariosComponent;
  let fixture: ComponentFixture<RestistrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestistrarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestistrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
