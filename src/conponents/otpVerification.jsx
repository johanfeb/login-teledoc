import React from "react";
import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";

const OTPVerification = ({ otp, setOtp, loading, onOTPVerify }) => {
  return (
    <>
      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
        <BsFillShieldLockFill size={30} />
      </div>
      <label htmlFor="otp" className="font-bold text-xl text-white text-center">
        Enter your OTP
      </label>
      <OtpInput
        value={otp}
        onChange={setOtp}
        OTPLength={6}
        otpType="number"
        disabled={false}
        autoFocus
        className="opt-container "
      ></OtpInput>
      <button
        onClick={onOTPVerify}
        className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
      >
        {loading && (
          <CgSpinner size={20} className="mt-1 animate-spin" />
        )}
        <span>Verify OTP</span>
      </button>
    </>
  );
};

export default OTPVerification;
