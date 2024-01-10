import FullWidth from "../layouts/FullWidth";

export default function ImageFullWidth(props?: any) {
    return (
        <FullWidth>
        <div className="col-span-12 pb-24">
        <img
        width={"100%"}
        // className="h-700"
        src={props.imgSrc ?? '/teaser_service.jpeg'}
        alt="hero product image"
      />
        </div>
      </FullWidth>
    );
  }