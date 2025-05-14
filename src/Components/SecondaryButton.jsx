const SecondaryButton = ({children, ...props})=>{
return <button className={`border-white border-2 px-3 py-1 text-white rounded-lg flex justify-center items-center gap-1.5  hover:bg-primary/0 hover:border-primary hover:border-2 hover:text-primary transition ease-in-out duration-200   ${props.className}`}>{children}</button>
}
export default SecondaryButton