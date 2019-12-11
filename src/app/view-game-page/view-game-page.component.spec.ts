import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGamePageComponent } from './view-game-page.component';

describe('ViewGamePageComponent', () => {
  let component: ViewGamePageComponent;
  let fixture: ComponentFixture<ViewGamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
