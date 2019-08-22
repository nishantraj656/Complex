import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDetailsComponent } from './association-details.component';

describe('AssociationDetailsComponent', () => {
  let component: AssociationDetailsComponent;
  let fixture: ComponentFixture<AssociationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
