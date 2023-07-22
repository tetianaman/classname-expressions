import styles from './test-component.module.scss';

export const TestComponent = () => {
    return <div className={`${styles.myClass} test class${2}`}>TestComponent</div>;
};
