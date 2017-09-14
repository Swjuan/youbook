import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisharticleComponent } from './publisharticle.component';

describe('PublisharticleComponent', () => {
  let component: PublisharticleComponent;
  let fixture: ComponentFixture<PublisharticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisharticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisharticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
