import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmplo4 } from './exmplo4';

describe('Exmplo4', () => {
  let component: Exmplo4;
  let fixture: ComponentFixture<Exmplo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exmplo4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exmplo4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
