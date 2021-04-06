import App from './App';
import {configure, shallow }from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("input testing", () => {

  test('renders title Submission ID', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("h1").text()).toContain("Enter Submission ID")
  });
})
