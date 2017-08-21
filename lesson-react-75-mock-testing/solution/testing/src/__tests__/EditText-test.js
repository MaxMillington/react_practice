import React from 'react';
import EditText from '../EditText';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('EditText', () => {
    let wrapper, endEdit, preventDefault

    it('renders without crashing', () => {
      let wrap = shallow(<EditText endEdit={(text)=> console.log(text)} />)
    });

    beforeEach(() => {
        endEdit = jest.fn()
        preventDefault = jest.fn()
        wrapper = shallow(<EditText endEdit={endEdit}/>);
    });

    it('renders correctly', () => {
        expect( toJson( wrapper ) ).not.toBeNull()
        expect( toJson( wrapper ) ).toMatchSnapshot()
    });

    it('sets the default value', () => {
        let input = wrapper.find('input')
        expect(input.props().value).toEqual('')
    });

    it('changes text', () => {
        let input = wrapper.find('input')
        input.simulate('change', { target: { value: 'hello' }})
        expect(toJson( wrapper )).toMatchSnapshot()
        input = wrapper.find('input')
        expect(input.props().value).toEqual('hello')
    });

    it('calls the callback, endEdit, with the correct text', () => {
        let input = wrapper.find('input').first()
        input.simulate('change', { target: { value: 'hello' }})
        expect(wrapper.state('text')).toEqual('hello')
        let form = wrapper.find('form').first()
        form.simulate('submit', {preventDefault})
        expect(endEdit).toBeCalledWith('hello')
        expect(preventDefault).toBeCalled()

        // it should clear the input after sending it to the endEdit
        input = wrapper.find('input')
        expect(input.props().value).toEqual('')
    });

})
