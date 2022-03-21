import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmenuComponent } from './ajoutmenu.component';

describe('AjoutmenuComponent', () => {
  let component: AjoutmenuComponent;
  let fixture: ComponentFixture<AjoutmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
