import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEnderecoComponent } from './profile-endereco.component';

describe('ProfileEnderecoComponent', () => {
  let component: ProfileEnderecoComponent;
  let fixture: ComponentFixture<ProfileEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEnderecoComponent]
    });
    fixture = TestBed.createComponent(ProfileEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
