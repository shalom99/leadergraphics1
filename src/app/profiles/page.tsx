import { FC } from "react";
import ProfileSelection from "../components/Profiles";
import getCurrentUser from "../../actions/getCurrentUser";
import getAgency from "../../actions/getAgency";
import getProfiles from "../../actions/getProfiles";
import { redirect } from "next/navigation";

type pageProps = {};

interface IParams {

}


const Profiles: FC<pageProps> = async ({}) => {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  const currentAgency = await getAgency(currentUser?.agency);
  const profiles = await getProfiles(currentUser?.agency)
  

  if(!currentUser){
    redirect("/login")
  }
  else if(currentUser.account_type === 800){
    redirect("/welcome")
  }
  else{
    return (
      <ProfileSelection currentAgency={currentAgency} profiles={profiles} />
    );
  }

};

export default Profiles;
