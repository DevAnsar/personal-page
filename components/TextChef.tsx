
export const maker = (text: string) => {
  const arr = text.trim().split("\n");

  return (
      <>
      {arr.map((r,index)=>{
          return(
            <p className="text-lg text-gray-700 dark:text-gray-200" key={index}>{r}</p>
          )
      })}
      </>
  );
};
