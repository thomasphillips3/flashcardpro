import React from 'react';
import { configure, shallow } from 'enzyme';
import { StackForm } from './StackForm';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

const changedTitle = 'booty title';
const changedPrompt = 'booty prompt';
const changedAnswer = 'booty answer';

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

    describe('and updating the title', () => {
        beforeEach(() => {
            stackForm.find('FormControl').simulate('change', { target: { value: changedTitle}});
        });

        it('updates the title in state', () => {
            expect(stackForm.state().title).toEqual(changedTitle);
        });
    });

    describe('when adding a new card', () => {
        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click')
        });
        
        afterEach(() => {
            stackForm.setState({ cards: [] });
        });

        it('adds a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        it('renders the prompt', () => {
            expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
        });

        it('renders the answer', () => {
            expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
        });

        describe('and updating the card prompt', () => {
            beforeEach(() => {
                stackForm.find('FormControl').at(1).simulate('change', { target: { value: changedPrompt} });
            });

            it('updates the prompt in state', () => {
                expect(stackForm.state().cards[0].prompt).toEqual(changedPrompt);
            });
        });

        describe('and updating the card answer', () => {
            beforeEach(() => {
                stackForm.find('FormControl').at(2).simulate('change', { target: { value: changedAnswer} });
            });

            it('updates the answer in state', () => {
                expect(stackForm.state().cards[0].answer).toEqual(changedAnswer);
            });
        })
    });

});