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

export { SpinningCore, Spinner }