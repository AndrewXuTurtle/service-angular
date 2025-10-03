import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tampildata } from './tampildata';

describe('Tampildata', () => {
  let component: Tampildata;
  let fixture: ComponentFixture<Tampildata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tampildata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tampildata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
