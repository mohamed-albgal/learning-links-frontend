import React ,{ useState, useContext } from 'react'
import tw, {styled} from'twin.macro';
import { Spinner } from './shared/Elements';
import { Selected, LinkContainer  } from './shared/StyleContainers';
import { BsPencilSquare, BsCheck, BsX, BsTrash }  from 'react-icons/bs';
import { StoreContext } from '../store/store';
import LinkForm from './LinkForm';

const Content = styled.button( () => [tw`min-h-full p-2 w-full font-thin text-white`] )
const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`
const LinkTitle = tw.p`font-semibold my-3`
const EditIconContainer = tw.div`absolute top-0  left-0 mx-2 my-2 rounded-md  text-left `
const EditIcon = tw.button`text-xl text-gray-400 hover:text-yellow-300`


const LinkContent = ({link, onClick,selected}) => {
    const showTicks = () => {
        return [...Array(link?.goals).keys()].map(_ => <ProgressTick />)
    };
    return (
        <>
            {selected && <EditIconContainer>
                <EditIcon onClick={(e) => onClick(e)}>
                    <BsPencilSquare/>
                </EditIcon>
            </EditIconContainer>}
            <LinkTitle>{link?.title}</LinkTitle>
            <ProgressBar >
                {showTicks()}
            </ProgressBar>
        </>
    )
}

const LinkItem =  ({ link }) => {
    const [creating, setCreating ] = useState(false)
    const { state, actions} = useContext(StoreContext);
    
    const ItemContainer = state.selected === link?.linkId ? Selected : LinkContainer
    const modifyLink = (data) => {
        actions.update({linkId: link.linkId, ...data});
        setCreating(false);
    }

    const deleteButton = (e) => {
        e.stopPropagation();
        actions.delete(link);
        setCreating(false);
    }

    const selectLink = () => {
        //need to only set 
        !creating && actions.updateSelected(link.linkId);
    }

    const editButtonClick = (e) => {
        e.stopPropagation();
        setCreating(!creating)
    }
    return (
        <ItemContainer onClick={selectLink} type="button">
            {state.loading ? <Spinner /> : <Content >
                {creating ? 
                <LinkForm deleteAction={deleteButton} link={link} saveForm={modifyLink} closeForm={()=>setCreating(false)} /> 
                : 
                <LinkContent onClick={editButtonClick} link={link} selected={true} /> }
            </Content>}
        </ItemContainer>
    )
};
export default LinkItem