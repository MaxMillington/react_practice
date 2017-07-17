// Hidden.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Hidden from '../src/components/Hidden';

describe('Hidden -- ', () => {
    let component, comp;

    beforeEach(() => {
        component = renderer.create(
            <Hidden />
        );
        comp = component.toJSON();
    });

    it('should exist', () => {
        expect(comp).not.toBeNull();
        expect(comp).toMatchSnapshot();
    });

    it('should accept a click event', () => {
        // manually trigger the callback
        comp.props.onClick();
        // re-rendering
        comp = component.toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('should return to normal after two click events', () => {
        // manually trigger the callback
        comp.props.onClick();
        comp.props.onClick();
        // re-rendering
        comp = component.toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('should find a p.block at init time', () => {
        expect(comp.children).toHaveLength(2);
        expect(comp.children[1].props.className).toEqual('block');
    });

    it('should find a p.none after one click', () => {
        comp.props.onClick();
        comp = component.toJSON();
        expect(comp.children).toHaveLength(2);
        expect(comp.children[1].props.className).toEqual('none');
    });

    it('should find a p.block after two clicks', () => {
        // manually do a click and re-render
        comp.props.onClick();
        comp = component.toJSON();
        // manually do another click and re-render
        comp.props.onClick();
        comp = component.toJSON();
        expect(comp.children[1].props.className).toEqual('block');
    });

});
