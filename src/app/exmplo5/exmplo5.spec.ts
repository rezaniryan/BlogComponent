import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo5 } from './exmplo5';

describe('Exmplo5', () => {
  let component: Exmplo5;
  let fixture: ComponentFixture<Exmplo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
