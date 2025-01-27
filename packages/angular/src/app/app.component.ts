import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SynergyFormsModule } from '@synergy-design-system/angular/modules/forms';
// import { SynButtonComponent, SynInputComponent } from '@synergy-design-system/angular';
import { SynButtonComponent } from '@synergy-design-system/angular/components/button';
import { SynInputComponent } from '@synergy-design-system/angular/components/input';
import { SynTextareaComponent } from '@synergy-design-system/angular/components/textarea';
import { SynCheckboxComponent } from '@synergy-design-system/angular/components/checkbox';
import { SynSwitchComponent } from '@synergy-design-system/angular/components/switch';
import { SynSelectComponent } from '@synergy-design-system/angular/components/select';
import { SynOptionComponent } from '@synergy-design-system/angular/components/option';
import { SynOptgroupComponent } from '@synergy-design-system/angular/components/optgroup';

const initialData = {
  role: '',
  switch: false,
  newsletterStandard: false,
  comment: 'Some stupid comment',
  name: 'Jens',
};

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ReactiveFormsModule,
        SynergyFormsModule,
        SynButtonComponent,
        SynCheckboxComponent,
        SynSwitchComponent,
        SynInputComponent,
        SynTextareaComponent,
        SynSelectComponent,
        SynOptionComponent,
        SynOptgroupComponent,
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
