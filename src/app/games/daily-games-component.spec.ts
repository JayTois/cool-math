import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DailyGamesComponent } from './daily-games.component';


describe('DailyGamesComponent', () => {
  let component: DailyGamesComponent;
  let fixture: ComponentFixture<DailyGamesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [DailyGamesComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});