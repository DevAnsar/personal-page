import Image from 'next/image';

export const maker = (text: string) => {
  const arr = text.trim().split("\n");

  return (
      <>
      {arr.map((r,index)=>{
          return(
            <p className="text-md text-gray-800" key={index}>{r}</p>
          )
      })}
      </>
  );
};
