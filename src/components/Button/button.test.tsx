import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

test('our first react test case', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.queryByText('Nice');
    expect(element).toBeTruthy();
});
