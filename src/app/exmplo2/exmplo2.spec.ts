import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo2 } from './exmplo2';

describe('Exmplo2', () => {
  let component: Exmplo2;
  let fixture: ComponentFixture<Exmplo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
