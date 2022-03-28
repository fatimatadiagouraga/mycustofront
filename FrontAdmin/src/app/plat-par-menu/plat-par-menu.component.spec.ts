import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatParMenuComponent } from './plat-par-menu.component';

describe('PlatParMenuComponent', () => {
  let component: PlatParMenuComponent;
  let fixture: ComponentFixture<PlatParMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatParMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatParMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
