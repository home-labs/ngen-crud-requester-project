import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgenRestfulCrudComponent } from './ngen-restful-crud.component';

describe('NgenRestfulCrudComponent', () => {
  let component: NgenRestfulCrudComponent;
  let fixture: ComponentFixture<NgenRestfulCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgenRestfulCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgenRestfulCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
