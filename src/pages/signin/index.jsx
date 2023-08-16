import dynamic from "next/dynamic";
import Head from "next/head";

const SignInForm = dynamic(() => import("../../components/SignIn/SignInForm"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Sign In - ARQ</title>
      </Head>
      <div className="">
        <SignInForm />
      </div>
    </>
  );
};

export default Index;