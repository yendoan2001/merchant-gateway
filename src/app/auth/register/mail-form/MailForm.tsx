import {Button} from "flowbite-react";
import Link from "next/link";

export const MailForm = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-8'>
            <p className='font-semibold text-2xl'>Gửi lại Email kích hoạt</p>
            <p className='text-sm text-[#626E7B]'>Bạn vui lòng truy cập hòm thư linhcute9x@gmail.com và bấm vào
                <span className='flex justify-center space-x-1'>
                    <Link className='text-red-500 font-bold' href='#'>
                        Link kích hoạt
                    </Link>
                    <span> sau khi thực hiện gửi lại.</span>
                </span>
            </p>

            <div className="relative w-3/5 mt-5">
                <input type="email" id="hs-floating-input-passowrd-value"
                       required
                       className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                />
                <label htmlFor="hs-floating-input-passowrd-value"
                       className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">
                    Email
                    <span className='text-red-600 ml-1'>
                                    *
                                </span>
                </label>
            </div>

            <Button className='w-40 h-8 bg-[#4FAAC1] flex items-center text-sm'>Gửi lại</Button>
            <p className='mt-24 text-xs text-[#A6C5CD]'>Hotline hỗ trợ 24/7: 1900 0128</p>
        </div>
    )
}