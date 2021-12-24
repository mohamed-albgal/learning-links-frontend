import Button from "../Button";
import tw from 'twin.macro'
import { Link } from "react-router-dom";

export const Field = tw.label`text-sm block p-2 my-2 text-gray-900`
export const Input = tw.input`shadow bg-purple-100 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner`;
export const SubmitButton = tw(Button)`text-lg font-thin tracking-wide h-10 w-24 mr-3`
export const ButtonContainer = tw.div`py-5 w-full my-5`
export const HeadLine = tw.p`inline-block tracking-wide text-2xl mt-8 mb-4 font-light text-gray-900`
export const ClickableHeadLine = tw(HeadLine)`ml-2 font-semibold`
export const Container = tw.div`mt-40 max-w-xl mx-auto bg-gray-100 p-10`;
export const RedirectingLink = tw(Link)`inline-block ml-1 tracking-wide text-purple-600 `
export const ErrorMessage = tw.p`px-10 text-red-400 p-0`
