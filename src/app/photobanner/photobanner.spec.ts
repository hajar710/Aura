import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photobanner } from './photobanner';

describe('Photobanner', () => {
  let component: Photobanner;
  let fixture: ComponentFixture<Photobanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Photobanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photobanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
