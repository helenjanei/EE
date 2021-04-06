import App from './App';
import {configure, shallow }from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("input testing", () => {

  test('renders title Submission ID', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("h1").text()).toContain("Enter Submission ID")
  });
  test('renders an input element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(
    <input className="input" />
  )).toBeTruthy()
  });
  test("sets state to 'search:null'", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state()).toEqual({"search": null})
  });
})
