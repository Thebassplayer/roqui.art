import { Obra } from "@/types";
import { CldImage } from "next-cloudinary";

type ObraCardProps = {
  obra: Obra;
};

const ObraCard = ({ obra }: ObraCardProps) => {
  return (
    <div>
      <figure
        key={obra.publicId}
        className="mx-auto flex h-full w-full items-center justify-center md:py-10"
      >
        <CldImage
          width="286"
          height="286"
          src={obra.publicId}
          alt={obra.alt}
          crop="pad"
        />
      </figure>
    </div>
  );
};

export default ObraCard;
