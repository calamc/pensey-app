import React from 'react'
import { shallow } from 'enzyme'

import { Login } from '../../components/Login.js';

test('Login component rendering correctly?', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});