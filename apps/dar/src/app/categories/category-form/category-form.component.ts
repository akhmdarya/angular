
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent{







  @Input()
  form: FormGroup;

  @Input()
  categories: Category[];

  @Output()
  formSubmit = new EventEmitter<FormGroup>();



  submitted = false;

  onSubmitHandler() {
    this.submitted = true;
    this.formSubmit.emit(this.form);
  }


}