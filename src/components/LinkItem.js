import tw, {styled} from'twin.macro';

//takes teh title, id and a callback function for what to do when a certain link has been selected
export default ({title, itemKey, onSelect }) => {
    const Container = styled.div( () => [tw` relative border border-gray-900 w-full bg-gradient-to-r from-purple-900 to-purple-500  p-4 my-3  rounded-md`,]);
    const Content = styled.button( () => [tw`h-10 p-2 w-full font-thin text-white`] )
    const ProgressBar = styled.div( () => [ tw`flex justify-items-start  h-1`])
    const ProgressTick = tw.div`mr-3 h-1 w-1/6 bg-yellow-400`

    // TODO: for every goal, map a progress tick, for every completed goal, color an existing (invisible) tick
    // const ShowButton = tw(Button)`absolute right-0 top-0 m-1 w-9 h-auto `

    return (
            <Container key={itemKey} >
                <Content onClick={() => onSelect(itemKey)}>{title}
                    <ProgressBar >
                        <ProgressTick/>
                        <ProgressTick/>
                        <ProgressTick/>
                        <ProgressTick/>
                    </ProgressBar>
                </Content>
            </Container>
    )
}