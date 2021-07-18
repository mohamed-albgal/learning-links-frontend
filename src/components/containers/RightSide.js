import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';

const RightSide = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
// receives as props: one link's body and title
export default ({ linkData, onNoteBodyChange}) => {
    const { body, title } = linkData
    return (
        <RightSide>
            <TextBoxBody 
            body={ body } 
            title={title} 
            updateBody={onNoteBodyChange} />
        </RightSide>
    )
}
