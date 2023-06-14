import OtpInput from "otp-input-react";
import { useState } from "react";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const App = () => {
    const [otp, setOtp] = useState("");
    
}