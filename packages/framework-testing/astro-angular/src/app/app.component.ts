import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'astro-angular';

  // Reactive form — tests formControl bindings on rux-* elements
  form = new FormGroup({
    textInput: new FormControl(''),
    numberInput: new FormControl(null),
    textArea: new FormControl(''),
    selectValue: new FormControl(''),
    radioGroup: new FormControl(''),
    checkboxValue: new FormControl(false),
    switchValue: new FormControl(false),
  });

  // Template-driven — tests ngModel bindings
  ngModelText = '';

  get formValues(): string {
    return JSON.stringify(this.form.value, null, 2);
  }

  onSubmit() {
    alert(this.formValues);
  }
}
