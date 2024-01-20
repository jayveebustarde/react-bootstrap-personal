import './PfButton.scss';
import PfButton from './PfButton';

const PfDlButton = ({ href, fileName, variant, children }) => {
  return (
    <PfButton
      variant={variant}
      href={href}
      download={fileName}
      className='pf-btn my-2'
    >
      {children}
    </PfButton>
  );
};

export default PfDlButton;
