import { render } from 'test-utils';
// eslint-disable-next-line no-unused-vars
import { toHaveAttribute } from '@testing-library/jest-dom';

import CheckBox from '../CheckBox';

const props = {
  isSelected: true,
  id: 'checkbox',
  onChange: jest.fn(),
};

describe('CheckBox', () => {
  it('renders correctly', () => {
    const text = 'CheckBox';

    const { container } = render(
      <CheckBox {...props}>
        {text}
      </CheckBox>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="field"
      >
        <input
          checked=""
          data-testid="checkbox"
          id="checkbox"
          type="checkbox"
        />
        <label
          for="checkbox"
        >
          CheckBox
        </label>
      </div>
    `);
  });
});
