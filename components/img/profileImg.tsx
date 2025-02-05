import React, { FC } from "react";
import { Button } from "../ui/button";
interface ProfileProps{
    onClick?:()=>void;
}

const ProfileImage:FC<ProfileProps> = ({onClick}) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-[#878686] text-white text-center overflow-hidden">
      <p className="text-sm leading-tight mb-4">
        Profile picture <br />
        Optimal Dimensions <br />
        400px by 400px
      </p>
      <Button onClick={onClick} className="mt-2 px-4 py-2 rounded-full bg-[#FF4101] text-white">
        Add Image
      </Button>
    </div>
  );
};

export default ProfileImage;
