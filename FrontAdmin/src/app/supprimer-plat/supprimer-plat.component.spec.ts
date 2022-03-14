import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPlatComponent } from './supprimer-plat.component';

describe('SupprimerPlatComponent', () => {
  let component: SupprimerPlatComponent;
  let fixture: ComponentFixture<SupprimerPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
