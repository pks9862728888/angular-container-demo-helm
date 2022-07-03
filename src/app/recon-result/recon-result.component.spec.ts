import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconResultComponent } from './recon-result.component';

describe('ReconResultComponent', () => {
  let component: ReconResultComponent;
  let fixture: ComponentFixture<ReconResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
