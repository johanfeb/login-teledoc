import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CgSpinner } from "react-icons/cg";

const PhoneNumberVerification = ({ ph, setPh, loading, onSignup }) => {
  return (
    <>
      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
        <BsTelephoneFill size={30} />
      </div>
      <label
        htmlFor=""
        className="font-bold text-xl text-white text-center"
      >
        Verify your phone number
      </label>
      <PhoneInput country={"id"} value={ph} onChange={setPh} />
      <button
        onClick={onSignup}
        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
      >
        {loading && (
          <CgSpinner size={20} className="mt-1 animate-spin" />
        )}
        <span>Send code via SMS</span>
      </button>
    </>
  );
};

export default PhoneNumberVerification;
