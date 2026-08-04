type GreetingProps = {
    name: string; 
    age ?: number
}

function Practice( {name, age} : GreetingProps){
    return(
        <div>
            <h1>Hello {name}</h1>
            {age != undefined && <p>Your are {age} years old</p>}
        </div>
    )
}

export default Practice