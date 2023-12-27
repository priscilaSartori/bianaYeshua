import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePedidoComponent } from './profile-pedido.component';

describe('ProfilePedidoComponent', () => {
  let component: ProfilePedidoComponent;
  let fixture: ComponentFixture<ProfilePedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePedidoComponent]
    });
    fixture = TestBed.createComponent(ProfilePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
