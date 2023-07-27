import { signOut } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type AccountModalProps = {
  showAccountModal: any;
  currentAgent: any;
};

const AgentModal: FC<AccountModalProps> = ({
  showAccountModal,
  currentAgent,
}) => {
  if (!showAccountModal) {
    return null;
  }

  return (
    <div className="absolute top-[60px] left-[-100px] right-0 rounded-xl bg-white flex flex-col gap-y-3 text-center">
      <h1 className="">
      {currentAgent?.first_name + " " + currentAgent?.last_name}
      </h1>

      <button className=" cursor-not-allowed">Campaigns</button>

      <Link href="/designhub">
        <button className="">Design Hub</button>
      </Link>
      <button className=" cursor-not-allowed">Drafts</button>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="border-t-2 py-2"
      >
        Sign Out
      </button>

      {/* <button onClick={() => {setShowAccountModal(prev => !prev)}} className="absolute top-2 left-2"><AiFillCloseCircle size={25}/></button> */}
    </div>
  );
};

export default AgentModal;
