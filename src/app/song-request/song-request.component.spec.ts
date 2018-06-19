import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRequestComponent } from './song-request.component';

describe('SongRequestComponent', () => {
  let component: SongRequestComponent;
  let fixture: ComponentFixture<SongRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
