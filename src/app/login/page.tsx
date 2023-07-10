
import { FC } from "react";
import LoginForm from "../components/forms/LoginForm";
import getCurrentUser from "../actions/getCurrentUser";
import { redirect, useRouter } from "next/navigation";


const Login: FC = async ({}) => {
  const currentUser = await getCurrentUser();

  if(!currentUser){
    return <LoginForm />
  }else{
    redirect("/profiles")
  }


};

export default Login;
