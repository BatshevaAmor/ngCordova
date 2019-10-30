import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoesComponent } from './vidoes.component';

describe('VidoesComponent', () => {
  let component: VidoesComponent;
  let fixture: ComponentFixture<VidoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
