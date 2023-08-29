import classNames from 'classnames';
import styles from './use-cases.module.scss';

export interface UseCasesProps {
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    mode: 'light' | 'dark';
}

export const UseCases = ({ className, headerClassName, contentClassName, mode }: UseCasesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            UseCases
            <div className={headerClassName}>Header with class name</div>
            <div className={contentClassName}>content with class name</div>
            <div className={styles[mode]}>light/dark mode</div>
            <div className={styles.dark}><div className={`${styles[mode]}Mode`}>light/dark mode</div></div>
            <div>{styles.dark}</div>
            <div>{`${styles[mode]}Mode`}</div>
        </div>
    );
};
