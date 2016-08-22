jest.unmock('../src/js/components/Navbar/Navbar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Navbar from '../src/js/components/Navbar/Navbar';

describe('Navbar', () => {
    it('should exist', function() {
        var NavbarComp = TestUtils.renderIntoDocument(<Navbar/>);
        expect(TestUtils.isCompositeComponent(NavbarComp)).toBeTruthy();
    });
    it('should not show any links when not logged in', function() {
        var NavbarComp = TestUtils.renderIntoDocument(<Navbar logged="false"/>);
        const links = TestUtils.scryRenderedDOMComponentsWithClass(NavbarComp, 'glyphicon');
        expect(links.length).toEqual(0);
    });
    // it('should show 5 links when logged in', function() {
    //     var NavbarComp = TestUtils.renderIntoDocument(<Navbar logged="true" bank='bank'/>);
    //     const links = TestUtils.scryRenderedDOMComponentsWithClass(NavbarComp, 'span');
    //     expect(links.length).toEqual(5);
    // });
});
