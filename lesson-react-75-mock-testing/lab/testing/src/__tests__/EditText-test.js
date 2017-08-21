import React from 'react';
import EditText from '../EditText';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('EditText', () => {
    let wrapper, endEdit, preventDefault

    it('renders without crashing', () => {
      let wrap = shallow(<EditText endEdit={(text)=> console.log(text)} />)
    });

})
