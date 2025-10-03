import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segitigaluas } from './segitigaluas';

describe('Segitigaluas', () => {
  let component: Segitigaluas;
  let fixture: ComponentFixture<Segitigaluas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segitigaluas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segitigaluas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
