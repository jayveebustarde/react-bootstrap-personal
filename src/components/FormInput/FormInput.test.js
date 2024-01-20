import { render, fireEvent } from '@testing-library/react';
import FormInput from './FormInput';

describe('<FormInput />', () => {
  let component;
  const mockOnChange = jest.fn();

  beforeEach(() => {
    component = render(
      <FormInput
        label='Test Label'
        placeholder='Test Placeholder'
        type='text'
        cId='testId1'
        name='testName'
        value=''
        onChange={mockOnChange}
        optional={false}
      />,
    );
  });

  it('renders correctly', () => {
    expect(component).not.toBeNull();
  });

  it('displays the correct label', () => {
    const label = component.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('displays the correct placeholder', () => {
    const input = component.getByPlaceholderText('Test Placeholder');
    expect(input).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const input = component.getByPlaceholderText('Test Placeholder');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('has the correct required attribute', () => {
    const input = component.getByPlaceholderText('Test Placeholder');
    expect(input).toBeRequired();
  });

  it('handles optional attribute correctly', () => {
    const { getByPlaceholderText } = render(
      <FormInput
        label='Test Label'
        placeholder='Test Placeholder Unique'
        type='text'
        cId='testId2'
        name='testName'
        value=''
        onChange={mockOnChange}
        optional={true}
      />,
    );
    const input = getByPlaceholderText('Test Placeholder Unique');
    expect(input).not.toBeRequired();
  });
});
