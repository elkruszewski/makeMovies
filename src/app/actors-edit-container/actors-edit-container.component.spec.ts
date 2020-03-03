import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsEditContainerComponent } from './actors-edit-container.component';

describe('ActorsEditContainerComponent', () => {
  let component: ActorsEditContainerComponent;
  let fixture: ComponentFixture<ActorsEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
