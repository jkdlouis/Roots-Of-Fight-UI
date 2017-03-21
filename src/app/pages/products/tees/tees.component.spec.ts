/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeesComponent } from './tees.component';

describe('TeesComponent', () => {
  let component: TeesComponent;
  let fixture: ComponentFixture<TeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
