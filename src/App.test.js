import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('header is rendered', () => {
  const wrapper = shallow(<App />);
  const headerEl = wrapper.find('header');
  expect(headerEl.length).toBe(1);
});
