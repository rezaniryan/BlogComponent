import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo9 } from './exmplo9';

describe('Exmplo9', () => {
  let component: Exmplo9;
  let fixture: ComponentFixture<Exmplo9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
