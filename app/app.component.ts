import { Component, ComponentRef, TemplateRef, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx">
      </ng-container>
      <template #tmpl let-name let-location="location">
        {{ name }}: {{ location }}
      </template>
    </div>
  `
})
export class AppComponent {
  ctx = {
    $implicit: 'David Casanellas',
    location: 'Barcelona, Catalunya'
  };
}
