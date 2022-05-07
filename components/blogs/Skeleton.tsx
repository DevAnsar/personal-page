import { DataSkeletonTypes,ImageSkeletonTypes } from "../../types";

export const DataSkeleton = (props: DataSkeletonTypes) => {
  const getSelectons = () => {
    let rows: number;
    if (props.skeletonRows) {
      rows = props.skeletonRows;
    } else {
      rows = 1;
    }
    let arr=[];
    for(let i=0;i<rows;i++) {arr[i]=i}
    return (
      <div className={`${props.skeletonRowCalss}`}>
        {arr.map((r) => (
          <div className={`bg-gray-300 animate-pulse ${props.skeletonCalss}`} />
        ))}
      </div>
    );
  };
  // console.log('props.skeletonData',props.skeletonData);
  return (

    <>
      {props.skeletonData === undefined && getSelectons()}
      {props.skeletonData === null && <></>}
      {props.skeletonData !== undefined &&
        props.skeletonData !== null &&
        props.children}
    </>
  );
};

export const ImageSkeleton = (props: ImageSkeletonTypes) => {
  const getSelectons = () => {
    return <div className={`bg-gray-300 animate-pulse ${props.skeletonCalss}`} />
  
  };

  return (

    <>
      {props.image === undefined && getSelectons()}
      {props.image === null && (
        <img
        alt="blog photo"
        src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
        className="max-h-40 w-full object-cover"
      />
      )}
      {props.image !== undefined &&
        props.image !== null &&
        props.children}
    </>
  );
};
