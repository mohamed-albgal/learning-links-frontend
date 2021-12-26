
import React, { useContext, useState, useEffect  } from 'react';
import tw from 'twin.macro';
import { StoreContext } from '../store/store';

const NoteTitle= tw.div`text-xl font-semibold text-center`
const Content = tw.div`w-11/12 mx-auto p-2 `
const PairGrid = tw.div`grid grid-cols-2 gap-8 `
const ItemBox = tw.textarea` p-4 h-36 font-semibold tracking-wide`

const Questions = () => {
    const { state,actions } = useContext(StoreContext)
    const [ questions, setQuestions] = useState(null);
    const [ answers, setAnswers] = useState(null);

    useEffect(() =>{
        //map id to q
        //map id to a
        let { questions } = state.links[state.selected];
        console.log(questions)
    },[])

    const saveQuestions = (data) => {
        //update the questions array
        actions.update(data);
    }
    const QuestionRow = () => {
        let question = "Some question"
        let answer = "Some answer"
        return(
            <PairGrid>
                <ItemBox />
                <ItemBox />
            </PairGrid>
        )
    }

    return (
        <>
            <NoteTitle >{state.links[state.selected].title}</NoteTitle>
            <Content><QuestionRow/></Content>
        </>
    )

}
export default Questions;