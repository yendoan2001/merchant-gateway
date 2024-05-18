interface Props {
    title1: string
    title2: string
    title3: string
}

export const Stepper = (props: Props) => {
    const {title1, title2, title3} = props
    return (
        <div>
            <div className="w-full px-8 py-2">
                <div className="relative flex items-center justify-around w-full">
                    <div className="absolute left-0 top-2/4 h-0.5 w-2/3 translate-x-1/4 border-b-2 border-gray-300 border-dotted"></div>
                    <div
                        className="relative size-7 z-10 place-items-center flex justify-center items-center text-white flex-shrink-0 bg-[#4FAAC1] font-medium rounded-full">
                        1
                    </div>
                    <div className='relative rounded-2xl p-px bg-gradient-to-r from-[#76DCFF] to-[#FF89E7]'>
                        <div className="rounded-full bg-white">
                            <span
                                className="size-7 flex justify-center items-center flex-shrink-0 border-3 font-medium text-[#4FAAC1]">2</span>
                        </div>
                    </div>
                    <div className='relative rounded-2xl p-px bg-gradient-to-r from-[#76DCFF] to-[#FF89E7]'>
                        <div className="rounded-full bg-white">
                            <span
                                className="size-7 flex justify-center items-center flex-shrink-0 border-3 font-medium text-[#4FAAC1]">3</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="flex flex-row justify-between items-center gap-x-2 max-w-md mx-auto mb-2">
                <li className="flex flex-col">
                    <div className="mt-3"><span
                        className="block text-xs font-medium text-[#4FAAC1]">{title1}</span></div>
                </li>
                <li className="flex flex-col">

                <div className="mt-3"><span
                        className="block text-xs font-medium text-[#4FAAC1]">{title2}</span></div>
                </li>
                <li className="flex flex-col">
                    <div className="mt-3"><span
                        className="block text-xs font-medium text-[#4FAAC1]">{title3}</span></div>
                </li>
            </ul>
        </div>
    )
}