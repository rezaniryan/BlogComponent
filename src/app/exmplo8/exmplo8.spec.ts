import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo8 } from './exmplo8';

describe('Exmplo8', () => {
  let component: Exmplo8;
  let fixture: ComponentFixture<Exmplo8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
