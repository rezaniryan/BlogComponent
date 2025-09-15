import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo7 } from './exmplo7';

describe('Exmplo7', () => {
  let component: Exmplo7;
  let fixture: ComponentFixture<Exmplo7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
