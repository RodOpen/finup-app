import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGLComponent } from './live-gl.component';

describe('LiveGLComponent', () => {
  let component: LiveGLComponent;
  let fixture: ComponentFixture<LiveGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveGLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
