import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo10 } from './exmplo10';

describe('Exmplo10', () => {
  let component: Exmplo10;
  let fixture: ComponentFixture<Exmplo10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
