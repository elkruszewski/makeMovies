import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsEditContainerComponent } from './films-edit-container.component';

describe('FilmsEditContainerComponent', () => {
  let component: FilmsEditContainerComponent;
  let fixture: ComponentFixture<FilmsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
