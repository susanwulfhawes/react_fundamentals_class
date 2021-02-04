// Dynamic data can be assigned to child components

const NameProp = (props) => {  //property returning React element
    return <h1>Hello, {props.name}</h1>
}

export default NameProp;