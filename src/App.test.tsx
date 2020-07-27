import React from "react";
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import App from "./App";
import {Provider} from "react-redux";

configure({ adapter: new Adapter() });

const store = configureStore()({});

describe('App', () => {
  it("Should match snapshot", () => {
    const wrapper = render(<Provider store={store} ><App /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
