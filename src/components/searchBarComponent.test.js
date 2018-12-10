import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedSearchBarComponent, {SearchBarComponent} from './searchBarComponent';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";

const mockStore = configureStore();
const mockOnSubmit = jest.fn(()=> console.log('tested'));
const initialState = {
    onSubmit: mockOnSubmit,
    searchReducer: {
        searchCriteria: ''
    }
};

const store = mockStore(initialState);

describe('Search bar component', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<SearchBarComponent store={store}/>);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
    it('has the form element', () => {
        const wrapper = shallow(<SearchBarComponent store={store}/>);
        const component = wrapper.dive();
        expect(component.find('form.form-container').length).toEqual(1);
    });
    describe('form', () => {
       it('calls handler function by clicking Sumbit', () => {
           const wrapper = shallow(<form onSubmit={mockOnSubmit}/>);
           wrapper.simulate('submit')
       });
    });
});
