// import styles from "../../styles/ToggleButton.module.css";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect,useState } from "react";

const DarkModeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

//   const handleChangeTheme = (e : any) =>{
//     if(e.target.checked){
//         setTheme("dark");
//     }else{
//         setTheme("light");
//     }
//   }

//   useEffect(()=>{

//         const currentTheme = theme === "system" ? systemTheme : theme ;
//         if(currentTheme === "dark"){
//             checkboxRef.current = checked;
//         }else{

//         }
        
//   },[]);
  
const renderThemeChanger= () => {
    if(!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme ;

    console.log('currentTheme',currentTheme);
    if(currentTheme ==="dark"){
      return (
        <SunIcon className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
 };

return (
    <>
    {renderThemeChanger()}
    </>
    // <label htmlFor="toggle_button" className={styles.toggler}>
    //   <input id="toggle_button" className={styles.checkbox} type="checkbox" onChange={handleChangeTheme} ref={checkboxRef} />
    //   <span className={styles.ball} />
    //   <i className={styles.sun}>
    //       <SunIcon />
    //   </i>
    //   <i className={styles.moon}>
    //       <MoonIcon />
    //   </i>
    // </label>
  );
};

export default DarkModeToggleButton;

{
  /* <label
htmlFor="toggle_button"
className="toggler block w-[60px] h-[31px] border-2 border-solid border-blue-500 rounded-full cursor-pointer relative"
>
<input
  id="toggle_button"
  className="checkbox hidden"
  type="checkbox"
/>
<span className="ball absolute top-1/2 -translate-y-1/2 inline-block w-[25px] h-[25px] bg-blue-500 rounded-full left-px z-10 transition duration-300 delay-500 ease-in-out" />
<i className="sun absolute  top-1/2 -translate-y-1/2 left-1.5"></i>
<i className="moon absolute top-1/2 -translate-y-1/2 ring-1.5"></i>
</label> */
}
