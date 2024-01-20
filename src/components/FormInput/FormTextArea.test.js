import { render, fireEvent, screen } from '@testing-library/react';
import FormTextArea from './FormTextArea';

describe('<FormTextArea />', () => {
  const mockOnChange = jest.fn();

  it('renders correctly', () => {
    render(
      <FormTextArea
        label='Test Label'
        placeholder='Test Placeholder'
        cId='testId'
        name='testName'
        value=''
        onChange={mockOnChange}
      />,
    );

    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('handles optional attribute correctly when true', () => {
    render(
      <FormTextArea
        label='Test Label'
        placeholder='Test Placeholder'
        cId='testId'
        name='testName'
        value=''
        onChange={mockOnChange}
        optional={true}
      />,
    );

    const textarea = screen.getByPlaceholderText('Test Placeholder');
    expect(textarea).not.toBeRequired();
  });

  it('handles optional attribute correctly when false', () => {
    render(
      <FormTextArea
        label='Test Label'
        placeholder='Test Placeholder'
        cId='testId'
        name='testName'
        value=''
        onChange={mockOnChange}
        optional={false}
      />,
    );

    const textarea = screen.getByPlaceholderText('Test Placeholder');
    expect(textarea).toBeRequired();
  });

  it('calls onChange handler when text area value changes', () => {
    render(
      <FormTextArea
        label='Test Label'
        placeholder='Test Placeholder'
        cId='testId'
        name='testName'
        value=''
        onChange={mockOnChange}
      />,
    );

    const textarea = screen.getByPlaceholderText('Test Placeholder');
    fireEvent.change(textarea, { target: { value: 'New text' } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
