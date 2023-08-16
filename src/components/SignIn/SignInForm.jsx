import { Checkbox, Form, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/custom.module.css"

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User logged in successfully
        const user = userCredential.user;
        const token = user.accessToken;
        localStorage.setItem("token", token);
        router.push("/");
        console.log(user);
        // Do something after successful login, like redirecting to another page
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // Handle specific error codes or display a generic error message
      });
  };
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="relative bg-[#FCD0B5] w-[50%] h-[100vh] md:flex hidden">
          <div className="absolute top-0 left-0">
            <Image
              src={"/images/design.png"}
              width={300}
              height={300}
              alt="bg"
            />
          </div>
          <div className="flex items-center justify-center w-[80%] lg:w-full h-full">
            <Image
              src={"/images/groupSign.png"}
              width={300}
              height={300}
              alt="bg"
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src={"/images/designtwo.png"}
              width={300}
              height={300}
              alt="bg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-[100px] md:mt-0 bg-white w-full md:w-[50%] h-[100vh]">
          <form className="w-full max-w-sm h-[50%]">
            <div className="flex flex-col items-center justify-center formItems">
              <div
                className="font-bold mb-4"
                style={{
                  fontSize: "32px",
                  color: "black",
                  lineHeight: "39px",
                  fontFamily: "'Work sans', sans-serif",
                }}
              >
                Welcome
              </div>
              <div
                className="text-center mb-12"
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "23px",
                  color: "black",
                  fontFamily: "'Work sans', sans-serif",
                }}
              >
                Hey! Enter your details to get sign into your account
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-normal mb-2 formLables"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#777777",
                  lineHeight: "13px",
                  fontFamily: "'Roboto', sans-serif",
                }}
                for="username"
              >
                Email Address
              </label>
              <input
                className="shadow h-[50px] appearance-none border bg-[#FFFAF9] rounded py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline formItems"
                id="username"
                type="text"
                placeholder="Enter your email"
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  lineHeight: "13px",
                  fontFamily: "'Roboto', sans-serif",
                  border: "0.50px rgba(242, 106, 90, 0.49) solid",
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-normal mb-2 formLables"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#777777",
                  lineHeight: "13px",
                  fontFamily: "'Roboto', sans-serif",
                }}
                for="password"
              >
                Enter Password
              </label>
              <div className="relative">
                <input
                  className="shadow h-[50px] appearance-none border bg-[#FFFAF9] text-black rounded py-2 px-5 leading-tight focus:outline-none focus:shadow-outline formItems"
                  id="password"
                  type="password"
                  placeholder="Password"
                  style={{
                    color: "#000000",
                    fontSize: "16px",
                    lineHeight: "13px",
                    fontFamily: "'Roboto', sans-serif",
                    border: "0.50px rgba(242, 106, 90, 0.49) solid",
                  }}
                />
                <span
                  className="absolute right-8 bottom-5 text-xs cursor-pointer"
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "11px",
                    fontFamily: "'Roboto', sans-serif",
                    color: "#000000"
                  }}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="flex gap-3 items-center mt-4 ">
                <Checkbox className={styles.checkboxx} />
                <p
                  className="text-xs "
                  style={{
                    color: "#000000",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "11px",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Remember me!
                </p>
              </div>

            </div>
            <div
              className="flex items-center justify-center formItems"
              style={{
                height: "50px",
                background: "#F26A5A",
                color: "#FFFFFF",
                borderRadius: "5px",
              }}
            >
              <span
                style={{
                  marginTop: "0px",
                  fontSize: "16px",
                  lineHeight: "13px",
                  fontWeight: "400",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                Login
              </span>
            </div>
            <p
              className="text-xs text-center mt-10 "
              style={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "11px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Developed by <span style={{
                color: "#16349F",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "11px",
                fontFamily: "'Roboto', sans-serif",
              }}>ZySoftec</span>
            </p>
          </form>

        </div>

      </div>
    </div>
  );
};

export default SignInForm;
