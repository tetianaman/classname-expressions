import { createBoard } from '@wixc3/react-board';
import { TestComponent } from '../../../components/test-component/test-component';

export default createBoard({
    name: 'TestComponent',
    Board: () => <TestComponent />
});
