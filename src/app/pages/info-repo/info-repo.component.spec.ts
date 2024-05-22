import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRepoComponent } from './info-repo.component';

describe('InfoRepoComponent', () => {
  let component: InfoRepoComponent;
  let fixture: ComponentFixture<InfoRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRepoComponent]
    });
    fixture = TestBed.createComponent(InfoRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
