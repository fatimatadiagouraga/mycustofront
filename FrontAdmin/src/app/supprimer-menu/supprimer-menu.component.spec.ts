import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerMenuComponent } from './supprimer-menu.component';

describe('SupprimerMenuComponent', () => {
  let component: SupprimerMenuComponent;
  let fixture: ComponentFixture<SupprimerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
