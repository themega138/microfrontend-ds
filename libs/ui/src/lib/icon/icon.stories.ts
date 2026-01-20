import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DsIconComponent } from './icon.component';
import { provideDsIcons, dsDefaultIcons } from '@ds-angular/icons';

const meta: Meta<DsIconComponent> = {
  title: 'UI/Icon',
  component: DsIconComponent,
  decorators: [applicationConfig({ providers: [provideDsIcons(dsDefaultIcons)] })],
  args: {
    name: 'check',
    size: 'md'
  }
};

export default meta;

export const Default: StoryObj<DsIconComponent> = {};

export const Sizes: StoryObj<DsIconComponent> = {
  render: () => ({
    template: `
      <div style="display:flex; gap: 16px; align-items:center;">
        <ds-icon name="check" size="sm"></ds-icon>
        <ds-icon name="check" size="md"></ds-icon>
        <ds-icon name="check" size="lg"></ds-icon>
      </div>
    `
  })
};
