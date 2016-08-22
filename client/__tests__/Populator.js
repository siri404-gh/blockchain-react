jest.unmock('../src/js/components/Populator/Populator');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Populator from '../src/js/components/Populator/Populator';

describe('Populator', () => {
    it('should exist', function() {
        var PopulatorComp = TestUtils.renderIntoDocument(<Populator/>);
        expect(TestUtils.isCompositeComponent(PopulatorComp)).toBeTruthy();
    });
});
