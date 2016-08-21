jest.unmock('../src/js/components/PanelCollapse/PanelCollapse');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PanelCollapse from '../src/js/components/PanelCollapse/PanelCollapse';

describe('PanelCollapse', () => {
    it('should exist', function() {
        var panel = TestUtils.renderIntoDocument(<PanelCollapse/>);
        expect(TestUtils.isCompositeComponent(panel)).toBeTruthy();
    });

    it('collapses a div when clicked', () => {
        var message = 'test';
        var type="success";
        const panel = TestUtils.renderIntoDocument(
            <PanelCollapse message={message} type={type} target='testDiv'/>
        );
        const heading = TestUtils.scryRenderedDOMComponentsWithClass(panel, 'panel-heading');
        expect(heading.length).toEqual(1);
        expect(heading[0].textContent).toEqual(message);

        const panelType = TestUtils.scryRenderedDOMComponentsWithClass(panel, 'panel-success');
        expect(panelType.length).toEqual(1);
    });
});