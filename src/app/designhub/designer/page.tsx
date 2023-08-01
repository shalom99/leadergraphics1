
import getTemplate from "@/actions/getTemplates";

import Designer from "@/components/Designer";

import { FC } from "react";

type pageProps = {};

const Page: FC<pageProps> = async  ({}) => {
  const template = await getTemplate();


  return (

    <Designer template={template} />

    
  );
};

export default Page;
