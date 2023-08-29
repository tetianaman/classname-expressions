import { createBoard } from '@wixc3/react-board';
import { UseCases } from '../../../components/use-cases/use-cases';
import styles from './use-cases.module.scss';

export default createBoard({
    name: 'UseCases',
    Board: () => <UseCases contentClassName={styles.content} mode="dark" />,
    isSnippet: false,
});
