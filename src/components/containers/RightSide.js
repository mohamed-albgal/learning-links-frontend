import tw from 'twin.macro';
import TextBoxBody from '../TextBoxBody';

// receives as props: one link's body and title
export default ({ noteBody, noteTitle, onNoteBodyChange}) => {
    const RightSide = tw.div`w-2/3 bg-gray-100 flex-1 p-10`;
    return (
        <RightSide>
            <TextBoxBody 
            body={ noteBody } 
            title={noteTitle} 
            updatebody={onNoteBodyChange} />
        </RightSide>
    )
}
