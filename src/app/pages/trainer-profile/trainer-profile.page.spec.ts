import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfilePage } from './trainer-profile.page';

describe('TrainerProfilePage', () => {
  let component: TrainerProfilePage;
  let fixture: ComponentFixture<TrainerProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerProfilePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
