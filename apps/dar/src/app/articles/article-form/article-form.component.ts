import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '@dar-lab-ng/api-interfaces';

@Component({
  selector: 'dar-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {

  @Input()
  form: FormGroup;

  @Input()
  categories: Category[];

  @Output()
  formSubmit = new EventEmitter<FormGroup>();

  @Output()
  addTag = new EventEmitter();

  @Output()
  removeTag = new EventEmitter<number>();

  submitted = false;

  onSubmitHandler() {
    this.submitted = true;
    this.formSubmit.emit(this.form);
  }

  onAddTag() {
    this.addTag.emit(this.form);
  }

  onRemoveTag(index: number) {
    this.removeTag.emit(index);
  }
}
