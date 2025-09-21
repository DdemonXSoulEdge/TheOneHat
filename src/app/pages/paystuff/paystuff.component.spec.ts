import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystuffComponent } from './paystuff.component';

describe('PaystuffComponent', () => {
  let component: PaystuffComponent;
  let fixture: ComponentFixture<PaystuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaystuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaystuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
