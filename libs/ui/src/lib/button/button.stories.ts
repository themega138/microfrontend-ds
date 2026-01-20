import { Meta, StoryObj } from '@storybook/angular';
import { DsButtonDirective } from './button.directive';

const meta: Meta<DsButtonDirective> = {
  title: 'UI/Button',
  component: DsButtonDirective,
  render: (args) => ({
    props: args,
    template: `
      <button dsButton [variant]="variant" [size]="size" [loading]="loading" [disabled]="disabled">
        Button
      </button>
    `
  }),
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false
  }
};

export default meta;

export const Primary: StoryObj<DsButtonDirective> = {
  args: { variant: 'primary' }
};

export const Secondary: StoryObj<DsButtonDirective> = {
  args: { variant: 'secondary' }
};

export const Ghost: StoryObj<DsButtonDirective> = {
  args: { variant: 'ghost' }
};

export const Loading: StoryObj<DsButtonDirective> = {
  args: { loading: true }
};
