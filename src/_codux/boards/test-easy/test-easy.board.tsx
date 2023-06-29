import { createBoard } from '@wixc3/react-board';
import { TestEasy } from '../../../components/test-easy/test-easy';

export default createBoard({
    name: 'TestEasy',
    Board: () => <TestEasy />
});
