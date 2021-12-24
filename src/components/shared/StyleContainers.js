import tw from 'twin.macro'

export const LinkContainer = tw.div`relative    w-full bg-gradient-to-r from-gray-800 to-purple-800  p-4 my-3  rounded-md`
export const Selected = tw(LinkContainer)`  left-10 from-black to-purple-400 border-r-8 border-yellow-300  `