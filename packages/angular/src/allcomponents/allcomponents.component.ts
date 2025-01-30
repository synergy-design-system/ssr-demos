import { Component } from '@angular/core';
// import { SynTabGroupComponent } from '@synergy-design-system/angular/components/tab-group';
// import { SynTabComponent } from '@synergy-design-system/angular/components/tab';
// import { SynTabPanelComponent } from '@synergy-design-system/angular/components/tab-panel';
import * as DemoImports from '../AllComponentParts/index.js';
import { CommonModule } from '@angular/common';
import { type SynTabShowEvent } from '@synergy-design-system/components';

const Demos = Object.entries(DemoImports);
const activeDemo = Demos.at(0)?.at(0);

@Component({
  selector: 'all-components',
  standalone: true,
  imports: [
    CommonModule,
    // SynTabGroupComponent,
    // SynTabComponent,
    // SynTabPanelComponent,
  ],
  templateUrl: './allcomponents.component.html',
})
export class AllComponents {
  activeDemo: typeof activeDemo = activeDemo;
  Demos: typeof Demos = Demos;

  handleTabShow = (e: SynTabShowEvent) => {
    const { name } = e.detail;
    (e.target as HTMLElement).parentElement?.scrollTo(0, 0);

    const dialog = document.querySelector('syn-dialog');
    if (dialog) {
      dialog.open = name === 'Dialog';
    }
  }
}
