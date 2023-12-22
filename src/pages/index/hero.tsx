import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/brand/logo.png'

const HeroSection = () => {
    return (
        <section className="hero-section relative py-40 px-4 ">
            <span className='w-20 h-20 absolute -top-28 -left-28'>
                <svg className='w-96 h-96' width="590" height="590" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="294.897" cy="294.897" r="293.332" stroke="#7F6AFF" stroke-width="3.12971" />
                    <path
                        d="M529.831 294.898C529.831 424.876 424.643 530.24 294.893 530.24C165.143 530.24 59.9549 424.876 59.9549 294.898C59.9549 164.92 165.143 59.557 294.893 59.557C424.643 59.557 529.831 164.92 529.831 294.898Z"
                        stroke="#7F6AFF" stroke-width="3.12971" />
                    <path
                        d="M469.527 294.898C469.527 395.314 391.286 476.611 294.901 476.611C198.515 476.611 120.275 395.314 120.275 294.898C120.275 194.482 198.515 113.185 294.901 113.185C391.286 113.185 469.527 194.482 469.527 294.898Z"
                        stroke="#7F6AFF" stroke-width="3.12971" />
                </svg></span>
            <div className="hero-wrapper flex flex-col items-center justify-center">
                <Image
                    src={Logo}
                    alt="logo"
                    width={300}
                    height={100}
                    priority
                />
                <p className="font-SpaceGrotesk text-lg text-center text-neutral-300">
                    The fruits of labour!
                </p>
                <div className="hero-buttons flex mt-5 space-x-4">
                    <Button radius="full" className="custom-bg py-6 px-16 text-neutral-200 font-semibold" as={Link} color="secondary" href="#" variant="flat">
                        Subscribe
                    </Button>
                </div>
            </div>
            <span className='w-60 h-60  absolute overflow-hidden right-0 -bottom-2'>
                <svg className='w-96 h-96' width="590" height="590" viewBox="0 0 590 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="294.897" cy="294.897" r="293.332" stroke="#7F6AFF" stroke-width="3.12971" />
                    <path
                        d="M529.831 294.898C529.831 424.876 424.643 530.24 294.893 530.24C165.143 530.24 59.9549 424.876 59.9549 294.898C59.9549 164.92 165.143 59.557 294.893 59.557C424.643 59.557 529.831 164.92 529.831 294.898Z"
                        stroke="#7F6AFF" stroke-width="3.12971" />
                    <path
                        d="M469.527 294.898C469.527 395.314 391.286 476.611 294.901 476.611C198.515 476.611 120.275 395.314 120.275 294.898C120.275 194.482 198.515 113.185 294.901 113.185C391.286 113.185 469.527 194.482 469.527 294.898Z"
                        stroke="#7F6AFF" stroke-width="3.12971" />
                </svg></span>
        </section>
    );
};

export default HeroSection;
