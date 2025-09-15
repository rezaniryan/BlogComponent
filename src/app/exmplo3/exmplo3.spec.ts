import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo3 } from './exmplo3';

describe('Exmplo3', () => {
  let component: Exmplo3;
  let fixture: ComponentFixture<Exmplo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
