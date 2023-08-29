import { createBoard } from '@wixc3/react-board';
import { UseCases } from '../../../components/use-cases/use-cases';

export default createBoard({
    name: 'UseCases',
    Board: () => <UseCases contentClassName={''} />,
    isSnippet: true,
});
