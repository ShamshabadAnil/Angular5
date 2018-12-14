import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchhospitalComponent } from './searchhospital.component';

describe('SearchhospitalComponent', () => {
  let component: SearchhospitalComponent;
  let fixture: ComponentFixture<SearchhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
