import styles from './template-string.module.scss';
import './template-string.css';
import Classnames from 'classnames';

export const TemplateString = () => {
    const iconType: 'fire' | 'water' = 'fire';
    const mode: 'light' | 'dark' = 'dark';

    const x = styles.myClass;
    return (
        <div>
            <div className={`one two${2} three ${4}`}>1. Text and expressions</div>
            <div className={`${1}${2}`}>2. Two joined expressions</div>
            <div className={` many ${'spaces'}  ${3 - 1} `}>3. Many spaces</div>
            <div className={`6%^&%_\${5}`}>4. Just number</div>
            <div className={`${x}`}>5. Referense</div>
            <div className={`${styles.myClass}`}>6. Css file referense</div>
            <div className={`one`}>7. Add class 'tania-0' or 'two'</div>
            <div className={Classnames(`one`, styles.myClass)}>8. Classnames namespace</div>
        </div>
    );
};
