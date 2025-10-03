import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Penjumlahan } from './penjumlahan';

describe('Penjumlahan', () => {
  let component: Penjumlahan;
  let fixture: ComponentFixture<Penjumlahan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Penjumlahan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Penjumlahan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
