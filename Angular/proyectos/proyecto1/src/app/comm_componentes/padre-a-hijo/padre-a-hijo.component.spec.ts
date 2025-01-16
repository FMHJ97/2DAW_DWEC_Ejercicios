import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreAHijoComponent } from './padre-a-hijo.component';

describe('PadreAHijoComponent', () => {
  let component: PadreAHijoComponent;
  let fixture: ComponentFixture<PadreAHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreAHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreAHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
