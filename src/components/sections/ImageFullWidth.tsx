import FullWidth from "../layouts/FullWidth";

export default function ImageFullWidth(props?: any) {
    return (
        <FullWidth>
        <div className="col-span-12 pb-24">
        <img
        className="aspect-[2/1] object-cover"
        width={"100%"}
        src={props.imgSrc ?? '/teaser_service.jpeg'}
        alt="hero product image"
      />
        </div>
      </FullWidth>
    );
  }