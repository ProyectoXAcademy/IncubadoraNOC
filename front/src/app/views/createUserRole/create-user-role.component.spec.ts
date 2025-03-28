import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserRoleComponent } from './create-user-role.component';

describe('CreateUserRoleComponent', () => {
  let component: CreateUserRoleComponent;
  let fixture: ComponentFixture<CreateUserRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
