import React from 'react';
import { configure, shallow } from 'enzyme';
import { StackForm } from './StackForm';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

describe('StackForm', () => {
    const stackForm = shallow(<StackForm />);

    it('renders the form title', () => {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('renders the Home link', () => {
        expect(stackForm.find('h4').at(0).text()).toEqual('Home');
    });

    it('renders a form component', () => {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('renders a button to add a new card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('renders a button to save a new stack', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Add Stack');
    });
});