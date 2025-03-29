export default function productCard(){
    return(
      <div className="w-[200px] h-[400px] bg-gray-200 rounded">
        <img src={props.image}/>
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </div>  
    );
}