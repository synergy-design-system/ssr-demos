import { Component } from '@angular/core';
import { SynTabGroupComponent } from '@synergy-design-system/angular/components/tab-group';
import { SynTabComponent } from '@synergy-design-system/angular/components/tab';
import { SynTabPanelComponent } from '@synergy-design-system/angular/components/tab-panel';
import * as DemoImports from '../AllComponentParts/index.js';
import { CommonModule } from '@angular/common';
import { type SynTabShowEvent } from '@synergy-design-system/components';

const Demos = Object.entries(DemoImports);
const activeDemo = Demos.at(0)?.at(0);

type SynSSRError = {
  component: string;
  link?: string;
  description: string;
};

@Component({
  selector: 'all-components',
  standalone: true,
  imports: [
    CommonModule,
    SynTabGroupComponent,
    SynTabComponent,
    SynTabPanelComponent,
  ],
  templateUrl: './allcomponents.component.html',
})
export class AllComponents {

  ssrErrors: SynSSRError[] = [
    // {
    //   component: 'syn-alert',
    //   description: 'Uses document.createElement outside of the browser environment',
    //   link: 'https://github.com/synergy-design-system/synergy-design-system/blob/main/packages/components/src/components/alert/alert.component.ts#L25',
    // },
    // {
    //   component: 'syn-tab-group',
    //   description: 'Useds scrollEnd polyfill which is not SSR ready',
    //   link: 'https://github.com/synergy-design-system/synergy-design-system/blob/main/packages/components/src/internal/scrollend-polyfill.ts#L37',
    // },
    // {
    //   component: 'syn-validate',
    //   description: 'Uses <syn-alert> as s dependency, which fails in SSR (see above)',
    //   link: 'https://github.com/synergy-design-system/synergy-design-system/blob/main/packages/components/src/components/validate/validate.component.ts#L37',
    // }
  ];

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
