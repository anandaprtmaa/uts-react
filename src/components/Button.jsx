export default function Button({onClick,disabled,children,className,type}){
    return <button onClick={onClick} className={className} disabled={disabled}  > {children} </button>
}