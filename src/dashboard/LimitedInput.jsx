export default function LimitedInput(prop) {
    const textLength = () => {

        document.getElementById("l-count").innerHTML = document.getElementById("l-input").value.length;


    }
    return (

        <div className="limit">
            <input maxLength={prop.length} id="l-input" type="text" onKeyUp={textLength} />
            <div className="l-index" >
                <span id="l-count">0</span>
                <span  >/{prop.length}</span>
            </div>
        </div>


    )
}