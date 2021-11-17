import React from 'react';
import Login from "./components/web/authorization/Login/Login";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { useSelector, useDispatch } from 'react-redux';
import enableHooks from 'jest-react-hooks-shallow';
enableHooks(jest);
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
useDispatch.mockImplementation(() => mockDispatch);

describe ('Login', () => {

    let container;
    const component = shallow(<div><Login/></div>);
    beforeEach(() => {
        container = component.find('Login').dive();;
    });

    it ('should render Login component', () => {


        expect(container.find('form')).toHaveLength(1);
    });
});