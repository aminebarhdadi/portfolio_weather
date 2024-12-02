
import Image from "next/image";


export default function Card() {
    return (
        <div className="card image-full ">
        <figure>
        <Image
        src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png"
        width={800}
        height={500}
        quality={75}
        priority
        alt="Shoes"
      />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-2.5 text-white">Marketing</h2>
          <p className="text-white">Boost your brands visibility and engagement through targeted marketing strategies.</p>
        </div>
      </div>

    );
  }
  





