import { Meta, StoryObj } from '@storybook/angular';
import { DsFormFieldComponent } from './form-field.component';
import { DsInputDirective } from '../input/input.directive';

const meta: Meta<DsFormFieldComponent> = {
  title: 'UI/Form Field',
  component: DsFormFieldComponent,
  render: (args) => ({
    props: args,
    imports: [DsInputDirective],
    template: `
      <ds-form-field [label]="label" [hint]="hint" [error]="error">
        <input dsInput placeholder="Type here" [invalid]="!!error" />
      </ds-form-field>
    `
  }),
  args: {
    label: 'Label',
    hint: 'Helpful hint goes here.',
    error: ''
  }
};

export default meta;

export const Default: StoryObj<DsFormFieldComponent> = {};

export const Error: StoryObj<DsFormFieldComponent> = {
  args: {
    error: 'This field is required.'
  }
};
