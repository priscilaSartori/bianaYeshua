import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDadosComponent } from './profile-dados.component';

describe('ProfileDadosComponent', () => {
  let component: ProfileDadosComponent;
  let fixture: ComponentFixture<ProfileDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDadosComponent]
    });
    fixture = TestBed.createComponent(ProfileDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
