import styles from './test-class-name.module.scss';
import classNames from 'classnames';

export interface TestClassNameProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestClassName = ({ className }: TestClassNameProps) => {
    return <div className={classNames(styles.root, className)}>TestClassName</div>;
};
