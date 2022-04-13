import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriviaComponent } from './trivia-layout.component';

describe('BannerComponent', () => {
  let component: TriviaComponent
  let fixture: ComponentFixture<TriviaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [TriviaComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});