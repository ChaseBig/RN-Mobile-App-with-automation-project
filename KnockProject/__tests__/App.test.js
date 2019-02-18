import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-native-test-utils';
import mockComponent from 'react-native/jest/mockComponent';
import styled from 'styled-components/native';

const StyledComponent = styled.TouchableOpacity``;

describe('WallsAndPaint', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    
    expect(component).toMatchSnapshot();
  });

  it('should render view container text correctly with given string', () => {
    const strings = ['Kitchen'];
    const component = shallow(<App list={strings} />);
    expect(component).toMatchSnapshot();
  });

  it('should render TouchableOpacity "Good" wall condition', () => {
    jest.mock('TouchableOpacity', () => mockComponent('TouchableOpacity'));
    const mockFn = jest.fn();
    const Component = <TouchableOpacity onPress={mockFn}>Goasdfod</TouchableOpacity>;
    const tree = renderer(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should invoke press event on TouchableOpacity "Good" wall condition', () => {
    jest.mock('TouchableOpacity', () => mockComponent('TouchableOpacity'));
    const mockFn = jest.fn();
    const Component = <TouchableOpacity onPress={mockFn}>Poor</TouchableOpacity>;
    const dom = renderer(Component);

    expect(mockFn).not.toHaveBeenCalled();
    dom.simulate('press');
    expect(mockFn).toHaveBeenCalled();
  });
});