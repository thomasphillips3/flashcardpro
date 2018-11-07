import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from './Card';

configure({
    adapter: new Adapter()
});

const testPrompt = 'booty prompt';
const testAnswer = 'booty answer';

const card = { 
    id: 0,
    prompt: testPrompt,
    answer: testAnswer
}

const props = { card }



describe('Card', () => {
    const card = shallow(<Card {...props} />)

    it('renders the prompt without showing the answer', () => {
        expect(card.find('h4').at(0).text()).toEqual(testPrompt);
        expect(card.find('h4').at(1).hasClass('text-hidden')).toEqual(true);
    });

    describe('clicking the card', () => {
        beforeEach(() => {
            card.find('div').at(0).simulate('click');
        });

        it('reveals the answer', () => {
            expect(card.find('h4').at(1).text()).toEqual(testAnswer);
            expect(card.find('h4').at(1).hasClass('text-revealed')).toEqual(true);
        });
    });
});