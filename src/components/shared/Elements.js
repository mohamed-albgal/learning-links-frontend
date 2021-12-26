import tw from 'twin.macro'
import { FaPlus } from 'react-icons/fa'        

const SpinningCore = () => {
    return (
        <div className="animate-spin rounded-full h-8 w-7 border-t-2 border-b-2 border-purple-100 "></div>
    )

}
const Spinner = () => {
    return (
        <div className=" flex justify-center items-center ">
            <SpinningCore/>
        </div>
    )
}



const Icon = tw.button`text-gray-800  border border-gray-100 hover:border-yellow-300 shadow-md bg-gray-100 text-4xl`
const ArrowButton = tw(Icon)`m-1 mr-6 rounded-md `
const ArrowContainer = tw.div`text-right w-auto -mr-6 -mt-8 mb-1`
const PlusContainer = tw.div`py-5 text-center`
const PlusIcon = tw(Icon)`text-gray-800 p-1 rounded-full text-3xl`

const PlusButton = ({clickHandler}) => (
    <PlusContainer>
        <PlusIcon onClick={clickHandler}>
            <FaPlus/>
        </PlusIcon>
    </PlusContainer>
)
export { SpinningCore, Spinner, ArrowButton, ArrowContainer, PlusButton}