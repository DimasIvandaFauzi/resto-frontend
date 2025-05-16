const PrimaryButton = ({children, ...props})=>{
return <button onClick={props.onClick} className={`bg-primary pr-3 pl-2 py-1 text-black rounded-md flex justify-center items-center gap-1.5  hover:bg-primary/0 hover:outline-primary hover:outline-2 outline-none hover:text-primary transition ease-in-out duration-300   ${props.className}`}>{children}</button>
}
export default PrimaryButton