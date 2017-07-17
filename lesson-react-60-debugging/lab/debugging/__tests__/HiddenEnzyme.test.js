// HiddenEnzyme.test.js

import React from 'react';
import {shallow} from 'enzyme';
import html from 'html';

import Hidden from '../src/components/Hidden';

describe('Hidden -- ', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Hidden />);
    });

    it('should render one <p /> components', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should have two children', () => {
        expect(wrapper.children()).toHaveLength(2);
    });

    it('should have a type of <div>', () => {
        expect(wrapper.type()).toEqual('div');
    });

    it('should have a <p> with class === "block', () => {
        // TODO - verify that there are no <p> with class == none
        // TODO - verify that there is ONE <p> with class == block
        // NOTE - html.prettyPrint() formats the html string with indentations, etc.
        let data = html.prettyPrint(wrapper.html(), {indent_size: 2});
        expect(data).toMatchSnapshot();
    });

    it('should have a <p> with class === "none" after click', () => {
        // TODO - find the element that has the onClick method and click it
        //      find() the 'div'
        //      simulate() the 'click'
        // TODO - verify that there is ONE <p> with class == none
        // TODO - verify that there is NO <p> with class == block

        let data = html.prettyPrint(wrapper.html(), {indent_size: 2});
        expect(data).toMatchSnapshot();
    });

});
