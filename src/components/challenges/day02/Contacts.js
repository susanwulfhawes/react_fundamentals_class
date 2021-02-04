// Dynamic data can be assigned to child components

const Contacts = (props) => {  //property returning React element
    return (
        <div>
        <h3>{props.name}</h3>
        <p>Is {props.age} years old and attends {props.school}.  He will graduate in {props.gradYear}.</p>
        </div>
    )
}

export default Contacts;