import type { Preview } from '@storybook/angular';
import '../../design-tokens/src/lib/tokens.scss';
import '../../styles/src/lib/index.scss';

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'light');
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true }
  }
};

export default preview;
