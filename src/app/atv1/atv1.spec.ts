import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv1 } from './atv1';

describe('Atv1', () => {
  let component: Atv1;
  let fixture: ComponentFixture<Atv1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atv1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
