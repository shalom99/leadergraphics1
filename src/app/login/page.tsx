
import { FC } from "react";
import LoginForm from "@/components/forms/LoginForm";
import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";


const Login: FC = async ({}) => {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  if(!currentUser){
    return <LoginForm />
  }else{
    if(currentUser.account_type === 800){
      redirect("/welcome")
     
    }else{
      redirect("/profiles")
    }
    
  }


};

export default Login;
