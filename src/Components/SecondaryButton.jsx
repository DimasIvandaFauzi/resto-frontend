const SecondaryButton = ({children, ...props})=>{
return <button className={`outline-primary outline px-3 py-1 text-primary rounded-md flex justify-center items-center gap-1.5  hover:bg-primary hover:text-black transition ease-in-out duration-200   ${props.className}`}>{children}</button>
}
export default SecondaryButton