import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo1 } from './exmplo1';

describe('Exmplo1', () => {
  let component: Exmplo1;
  let fixture: ComponentFixture<Exmplo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
