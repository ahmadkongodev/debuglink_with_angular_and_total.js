import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmodalComponent } from './confirmodal.component';

describe('ConfirmodalComponent', () => {
  let component: ConfirmodalComponent;
  let fixture: ComponentFixture<ConfirmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
