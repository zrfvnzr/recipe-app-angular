import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreateOrEditComponent } from './recipe-create-or-edit.component';

describe('RecipeCreateOrEditComponent', () => {
  let component: RecipeCreateOrEditComponent;
  let fixture: ComponentFixture<RecipeCreateOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCreateOrEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
