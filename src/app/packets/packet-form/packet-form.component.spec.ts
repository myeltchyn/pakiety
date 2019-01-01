import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketFormComponent } from './packet-form.component';

describe('PacketFormComponent', () => {
  let component: PacketFormComponent;
  let fixture: ComponentFixture<PacketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
