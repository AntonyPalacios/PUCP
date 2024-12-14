import PropTypes from "prop-types";

const newMessage = {
    message:'Hello, World!',
    title:'Antony',
};

const saludar = ()=>{
    return "Hola desde la funcion"
}
export const FirstApp = ({title, subtitle,name}) => {
    // if(!title){
    //     throw new Error("Title is required");
    // }
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            {/*<code>{ JSON.stringify(newMessage)}</code>*/}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired ,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    // title:'No hay titulo',
    subtitle:'No hay subtitulo',
    name:'Antony'
}