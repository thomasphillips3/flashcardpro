import React from 'react';
import { configure, shallow } from 'enzyme';
import App from './App';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe ('App', () => {
    const app = shallow(<App />);

    it('renders the title', () => {
        expect(app.find('h2').text()).toEqual('Flashcard Pro');
    });

    it('renders the stack list', () => {
        expect(app.find('Connect(StackList)').exists()).toBe(true);
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    });
});