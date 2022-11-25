import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryFileComponent } from './jquery-file.component';

describe('JqueryFileComponent', () => {
  let component: JqueryFileComponent;
  let fixture: ComponentFixture<JqueryFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
