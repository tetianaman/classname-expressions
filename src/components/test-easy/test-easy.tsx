import styles from './test-easy.module.scss';
import './test-easy.css';
import classNames from 'classnames';

export const TestEasy = () => {
    const x = 'myClass';
    const foo = () => 'myClass1';

    return (
        <>
            <div className={'myClass'}>1. Expression with string</div>
            <div className={x}>2. Reference in file</div>
            <div className={styles.myClass}>3. Reference between files</div>
            <div className={foo()}>4. Function call</div>
            <div className={`myClass myClass${3}`}>5. Template string</div>
            <div className={classNames(x, 'myClass2')}>6. classNames namespace</div>
        </>
    );
};
