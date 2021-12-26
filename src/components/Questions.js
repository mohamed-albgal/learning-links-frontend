
import React, { useContext, useState, useEffect  } from 'react';
import tw from 'twin.macro';
import { StoreContext } from '../store/store';
import { PlusButton } from './shared/Elements';

const NoteTitle= tw.div`text-xl font-semibold text-center`
const Content = tw.div`w-11/12 mx-auto p-2 `
const PairGrid = tw.div`grid grid-cols-2 gap-8 `
const ItemBox = tw.textarea` p-4 w-72 h-36 my-4 flex-grow font-semibold tracking-wide`
const ButtonDiv = tw.div`inline self-center flex-grow-0 mx-10`
const OuterDiv = tw.div`w-9/12 my-4 mx-auto flex justify-self-stretch`

const Questions = () => {
    const { state,actions } = useContext(StoreContext)
    const [ newQuestion, setNewQuestion] = useState(null);
    const [ newAnswer, setNewAnswer] = useState(null);
    const [entries, setEntries] = useState([]);

    useEffect(() =>{
        let { questions=[] } = state.links[state.selected];
        setEntries([...questions]);
    },[])
    const link = state.links[state.selected]

    const saveQuestions = () => {
        if (newQuestion || newAnswer){
            let newdata = [...entries]
            newdata.push({question:newQuestion, answer:newAnswer});
            actions.update({questions: newdata, linkId: link.linkId});
            setEntries(newdata);
        }
    }
    const showExisting = () => {
        let data = entries || link.questions
        return data.map((e,i) =>{
            return(
                <>
                    <PairGrid>
                        <ItemBox value={e.question}/>
                        <ItemBox value={e.answer}/>
                    </PairGrid>
                </>
            )
        })
    }
    return (
        <>
            <NoteTitle >{state.links[state.selected].title}</NoteTitle>
            <Content>            
                <OuterDiv>
                    <ButtonDiv>
                        <PlusButton clickHandler={saveQuestions}/>
                    </ButtonDiv>
                    <PairGrid>
                        <ItemBox  onChange={e => setNewQuestion(e.target.value)}/>
                        <ItemBox onChange={e => setNewAnswer(e.target.value)}/>
                    </PairGrid>
                </OuterDiv>
                {(entries || link.questions) && showExisting()}
            </Content>
        </>
    )

}
export default Questions;