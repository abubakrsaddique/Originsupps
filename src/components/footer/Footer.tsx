import Image from "next/image";
import Link from "next/link";
import React from "react";

import Image1 from "@/public/origin.svg";
import MasterCard from "@/public/mastercard.webp";
import VisaCard from "@/public/visa.webp";
import GooglePayCard from "@/public/googlepay.webp";
import ApplePayCard from "@/public/applepay.webp";
import AmericanExpressCard from "@/public/americanexpress.webp";
import VenmoCard from "@/public/venmo.webp";
import PayPalCard from "@/public/paypal.webp";
import ShopPayCard from "@/public/shoppay.webp";
import DiscoverCard from "@/public/discover.webp";
import MetaCard from "@/public/meta.webp";
import DinnerClubCard from "@/public/DinnerClub.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-5 pt-[100px] mob:pt-[30px]">
      <div className="flex items-center justify-between px-[135px]  tab:px-[40px] tab:flex-col">
        <div className="flex justify-end">
          <div>
            <Image alt="Desktop Icon" className="mob:hidden" src={Image1} />

            <p className="mt-[15px] text-lightgray text-[10px] font-normal mob:hidden font-organetto">
              © 2023, Origin Supps
            </p>
          </div>
        </div>
        {/* Navigation links section */}
        <div className="flex gap-[90px] pl-[90px] mob:pl-0 lg:gap-[40px] mob:flex-col  tab:my-8 mob:mt-8 mob:gap-[15px]">
          <div className="flex flex-col gap-[15px] items-center">
            <Link href="/">
              <p className="text-base font-normal text-lightgray uppercase mob:w-fit font-organetto">
                HOME
              </p>
            </Link>
            <Link href="/shop">
              <p className="text-base font-normal text-lightgray font-organetto uppercase mob:w-fit">
                SHOP
              </p>
            </Link>
            <Link href="/product">
              <p className="text-base ml-10 mob:ml-0 font-normal text-lightgray font-organetto uppercase mob:w-fit">
                Add Product
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-[15px]">
            <Link href="#">
              <p className="text-base font-normal text-lightgray font-organetto uppercase mob:w-fit">
                Privacy POLICY
              </p>
            </Link>
            <Link href="#">
              <p className="text-base font-normal mob:text-[15px] text-lightgray font-organetto uppercase mob:w-fit">
                Terms of service
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-[15px]">
            <Link href="#">
              <p className="text-base font-normal text-lightgray font-organetto uppercase mob:w-fit">
                REFUND POLICY
              </p>
            </Link>
          </div>
        </div>
        {/* Payment methods section */}
        <div className="mob:mt-[30px]">
          <div className="flex gap-[11px]">
            <Image
              alt="master"
              src={MasterCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="visa"
              src={VisaCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="gpay"
              src={GooglePayCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="applePay"
              src={ApplePayCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="americanExpress"
              src={AmericanExpressCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="venmo"
              src={VenmoCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
          </div>
          <div className="flex gap-[11px] mt-[11px] mob:justify-center">
            <Image
              alt="paypal"
              src={PayPalCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="master"
              src={MetaCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="visa"
              src={DiscoverCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="gpay"
              src={ShopPayCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
            <Image
              alt="applePay"
              src={DinnerClubCard}
              width={28.13}
              height={22.5}
              className="h-[22.5px] w-[28.13px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray opacity-[.3] mt-10 mob:mt-5 "></div>
      <p className="font-poppins text-gray text-center pt-[20px] text-base mob:text-sm font-normal leading-6">
        <span className="text-lightgreen cursor-pointer border-b border-lightgreen ">
          Contact us
        </span>
        if you have questions
      </p>
    </footer>
  );
};

export default Footer;
