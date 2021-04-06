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
 // test("sets keyword to equal event.target.value", () => {
  //  const wrapper = shallow(<App />)
  // wrapper.find('input').simulate('onChange');
  //});
  test('sets keyword to equal event.target.value', () => {
  const wrapper = shallow(<App />)
  const input = wrapper.find("input");
  input.simulate("change", { target: { value:  '2191bf41-ce1e-427d-85c3-88d5a44680ae'} });  
  expect(wrapper.state().search).toEqual('2191bf41-ce1e-427d-85c3-88d5a44680ae');
  });
})
