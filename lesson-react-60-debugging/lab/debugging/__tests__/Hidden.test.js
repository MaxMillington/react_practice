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
        // TODO manually trigger the callback
        // TODO re-rendering
        expect(comp).toMatchSnapshot();
    });

    it('should return to normal after two click events', () => {
        // TODO manually trigger the callback twice
        // TODO re-rendering
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
        // TODO manually do a click and re-render
        // TODO manually do another click and re-render
        expect(comp.children[1].props.className).toEqual('block');
    });

});
