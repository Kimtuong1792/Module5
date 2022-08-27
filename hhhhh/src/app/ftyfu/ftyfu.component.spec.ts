import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtyfuComponent } from './ftyfu.component';

describe('FtyfuComponent', () => {
  let component: FtyfuComponent;
  let fixture: ComponentFixture<FtyfuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtyfuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtyfuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
