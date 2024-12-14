import {render, screen} from "@testing-library/react";
import {FirstApp} from "../FirstApp.jsx";

describe('Pruebas en FirstApp', () => {
    const title = 'Hola, soy Antony'
    const subtitle = 'Subtitulo'
    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el mensaje "Hola, soy Antony"', () => {
        render(<FirstApp title={title}/>)
        //screen.debug()
        expect(screen.getByText(title)).toBeTruthy()
    })
    test('debe de mostrar el título en un h1', () => {
        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(title)
    })

    test('debe de mostrar el subtitulo enviado por props',()=>{
        render(<FirstApp title={title} subtitle={subtitle}/>)
        expect(screen.getAllByText(subtitle).length).toBe(1)
    })

})