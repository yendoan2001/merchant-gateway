import Image from "next/image";
import {Button, Card} from "flowbite-react";
import {RegisterForm} from "@/app/auth/register/register-form/RegisterForm";
import {Stepper} from "@/components/stepper/Stepper";
import {EnterpriseForm} from "@/app/auth/register/enterprise-form/EnterpriseForm";
import {VerifyAccount} from "@/app/auth/register/verify-account/VerifyAccount";
import {MailForm} from "@/app/auth/register/mail-form/MailForm";

const Register = () => {
    return (
        <div className='flex justify-center mt-10'>
            <Card className="min-w-fit flex justify-center rounded-2xl w-1/3">
                <div className="flex justify-center items-center">
                    <Image
                        src="/logo.png"
                        alt="HPay Logo"
                        className="dark:invert"
                        width={120}
                        height={50}
                        priority
                    />
                </div>
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white flex justify-center items-center">
                    Đăng ký tài khoản HPay Merchant
                </h5>
                {/*steps*/}
                <Stepper title1='Thông tin đăng nhập' title2='Thông tin doanh nghiệp' title3='Xác thực tài khoản'/>
                {/*steps*/}

                {/*form*/}
                <VerifyAccount/>
                {/*form*/}
            </Card>
        </div>
    );
};

export default Register;
