const PrimaryButton = ({children, ...props})=>{
return <button className={`bg-primary px-3 py-1 text-black rounded-md flex justify-center items-center gap-1.5   ${props.className}`}>{children}</button>
}
export default PrimaryButton