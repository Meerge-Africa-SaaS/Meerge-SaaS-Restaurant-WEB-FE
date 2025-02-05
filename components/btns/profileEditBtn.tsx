import { ProfileEditIcon } from "@/public/assets/svgs";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface Props {
  viewModal?: boolean;
  setViewModal?: (value: boolean) => void;
  datamodalTrigger?: string
}

const ProfileEditBtn: FC<Props> = ({ setViewModal,datamodalTrigger }) => {
  return (
    <Button 
      data-modal-trigger={datamodalTrigger}
      className="text-[#FF4101] bg-none outline-none flex items-center gap-2 cursor-pointer"
      variant="ghost"
    >
      <span>Edit</span> <ProfileEditIcon />
    </Button>
  );
};

export default ProfileEditBtn;
