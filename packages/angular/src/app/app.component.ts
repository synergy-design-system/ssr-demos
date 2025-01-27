import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SynergyFormsModule } from '@synergy-design-system/angular/modules/forms';
import { SynButtonComponent } from '@synergy-design-system/angular/components/button';
import { SynInputComponent } from '@synergy-design-system/angular/components/input';

const initialData = {
  name: 'Jens',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    SynergyFormsModule,
    SynButtonComponent,
    SynInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  formData!: FormGroup;

  private _initFormData() {
    this.formData = this.fb.group({
      ...initialData,
    });
  }

  constructor(private fb: FormBuilder) {
    this._initFormData();
  }

  submit(form: FormGroup) {
    const isValid = form.valid;

    if (isValid) {
      // eslint-disable-next-line no-alert
      alert('Your data was successfully submitted');
    } else {
      console.log(form);
      alert('Wrong');
    }
  }

  synChange(e: Event) {
    console.log(e);
    console.log(this.formData);
  }
}
