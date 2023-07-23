import styles from './test-component.module.scss';
import './test-component.css';
import Classnames from 'classnames';

export const TestComponent = () => {
    return <div className={Classnames(`one`)}>TestComponent</div>;
};
