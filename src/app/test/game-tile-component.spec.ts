import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GameTileComponent } from '../games/game.tile.component';
import { HomeLayoutComponent } from '../games/home-layout.component';


describe('GameTileComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [HomeLayoutComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});