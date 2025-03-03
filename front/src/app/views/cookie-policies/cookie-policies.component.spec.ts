import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePoliciesComponent } from './cookie-policies.component';

describe('CookiePoliciesComponent', () => {
  let component: CookiePoliciesComponent;
  let fixture: ComponentFixture<CookiePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiePoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
