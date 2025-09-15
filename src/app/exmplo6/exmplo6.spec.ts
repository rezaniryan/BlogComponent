import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo6 } from './exmplo6';

describe('Exmplo6', () => {
  let component: Exmplo6;
  let fixture: ComponentFixture<Exmplo6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
