import { FC } from "react";
import ProfileSelection from "../components/Profiles";
import getCurrentUser from "../actions/getCurrentUser";
import getAgency from "../actions/getAgency";
import getProfiles from "../actions/getProfiles";
import { redirect } from "next/navigation";

type pageProps = {};


const Profiles: FC<pageProps> = async ({}) => {
  const currentUser = await getCurrentUser();
  const currentAgency = await getAgency(currentUser?.agency);
  const profiles = await getProfiles(currentUser?.agency)
  

  if(!currentUser){
    redirect("/login")
  }else{
    return (
      <ProfileSelection currentAgency={currentAgency} profiles={profiles} />
    );
  }

};

export default Profiles;
