import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermenuComponent } from './modifiermenu.component';

describe('ModifiermenuComponent', () => {
  let component: ModifiermenuComponent;
  let fixture: ComponentFixture<ModifiermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
