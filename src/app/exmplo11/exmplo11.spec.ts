import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo11 } from './exmplo11';

describe('Exmplo11', () => {
  let component: Exmplo11;
  let fixture: ComponentFixture<Exmplo11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
