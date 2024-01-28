import { Obra } from "@/types";
import { CldImage } from "next-cloudinary";

type ObraCardProps = {
  obra: Obra;
};

const ObraCard = ({ obra }: ObraCardProps) => {
  return (
    <div className="flow fle-col mx-auto w-[378px] items-center justify-center border border-solid border-lightBlue pb-10">
      <figure
        key={obra.publicId}
        className="mx-auto flex items-center justify-center md:py-10"
      >
        <CldImage
          width="286"
          height="286"
          src={obra.publicId}
          alt={obra.alt}
          crop="pad"
        />
      </figure>
      <h2 className="text-center">Abstracto 100 x 50 cm</h2>
      <h3 className="text-center">$1000</h3>
    </div>
  );
};

export default ObraCard;
