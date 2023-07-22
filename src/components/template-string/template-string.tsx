import styles from './template-string.module.scss';
import './template-string.css';

export const TemplateString = () => {
    const x = styles.myClass;
    return (
        <div>
            <div className={``}>1. Empty TemplateString</div>
            <div className={`one two`}>2. Just text</div>
            <div className={`one two${2} three ${4}`}>3. Text and expressions</div>
            <div className={`${1}`}>4. Just expression</div>
            <div className={`${1} ${2}`}>5. Two expressions separated by comma</div>
            <div className={`${1}${2}`}>6. Two joined expressions</div>
            <div className={` many ${'spaces'}  ${3 - 1} `}>7. Many spaces</div>
            <div className={`6`}>8. Just number</div>
            <div className={`${x}`}>9. Referense</div>
            <div className={`${styles.myClass}`}>10. Css file referense</div>
            <div className={`strange\${example}`}>11. $&#123;&#125; in the text</div>
            <div className={`one`}>12. Add class 'tania-0' or 'two'</div>
        </div>
    );
};
