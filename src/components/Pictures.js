import React, { useContext } from 'react';
import tw from 'twin.macro';
import { StoreContext } from '../store/store';

const NoteTitle= tw.div`text-xl font-semibold text-center`

const Pictures = () => {
    const { state, actions } = useContext(StoreContext)

    const saveBody = (data) => {
        actions.update(data);
    }

    return (
        <>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
            <NoteTitle >Pictures section coming soon</NoteTitle>
        </>
    )

}
export default Pictures;


/**

 * sees upload box
 * selects picture
 * validations
 * upload to some_? s3 bucket
 * get that bucket address
 * save in the db
 * on component fire, display all images, each can be deleted, order changed?
 * on image select, show image show - view in large mode
 
 * show all present images:
 *  for all image id entries in the db - add to index list
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
