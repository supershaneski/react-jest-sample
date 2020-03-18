import React, {createRef} from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

    test("Header will show text", () => {
        const { getByText } = render(<Header>This is a header</Header>);
        const textElement = getByText(/this is a header/i);
        expect(textElement).toBeInTheDocument();
    });

});