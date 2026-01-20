import { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from './card.component';
import { DsButtonDirective } from '../button/button.directive';

const meta: Meta<DsCardComponent> = {
  title: 'UI/Card',
  component: DsCardComponent,
  render: () => ({
    imports: [DsButtonDirective],
    template: `
      <ds-card>
        <div ds-card-header>
          <h3 class="ds-heading">Card header</h3>
          <p class="ds-body">Supporting text for the header.</p>
        </div>
        <div>
          <p class="ds-body">Card content supports arbitrary markup.</p>
        </div>
        <div ds-card-footer>
          <button dsButton variant="secondary" size="sm">Cancel</button>
          <button dsButton variant="primary" size="sm">Save</button>
        </div>
      </ds-card>
    `
  })
};

export default meta;

export const Default: StoryObj<DsCardComponent> = {};
