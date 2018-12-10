import React from 'react';
import HeaderContainer from './headerContainer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('Header container', () => {
    it('renders search bar child component', () => {
        const wrapper = shallow(<HeaderContainer/>);
        const searchBar = wrapper.find('Connect(SearchBarComponent)');
        const authButton = wrapper.find('Connect(AuthorizationComponent)');
        expect(searchBar.length).toEqual(1);
        expect(authButton.length).toEqual(1);
    });
    it('matches the snapshot', () => {
        const component = shallow(<HeaderContainer/>);
        expect(toJson(component)).toMatchSnapshot();
    })
});