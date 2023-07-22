import { createBoard } from '@wixc3/react-board';
import { TemplateString } from '../../../components/template-string/template-string';

export default createBoard({
    name: 'TemplateString',
    Board: () => <TemplateString />
});
