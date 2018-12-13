import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStockStatusComponent } from './get-stock-status.component';

describe('GetStockStatusComponent', () => {
  let component: GetStockStatusComponent;
  let fixture: ComponentFixture<GetStockStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStockStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
