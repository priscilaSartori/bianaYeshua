import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCartaoComponent } from './profile-cartao.component';

describe('ProfileCartaoComponent', () => {
  let component: ProfileCartaoComponent;
  let fixture: ComponentFixture<ProfileCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCartaoComponent]
    });
    fixture = TestBed.createComponent(ProfileCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
