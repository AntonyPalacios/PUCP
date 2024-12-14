import {render} from "@testing-library/react";
import {FirstApp} from "../FirstApp.jsx";

describe('Pruebas en FirstApp', () => {
    // test('debe de hacer match con el snapshot', ()=>{
    //     const title = 'Hola, Soy Antony'
    //     const { container } = render(<FirstApp title={title}/>)
    //
    //     expect(container).toMatchSnapshot()
    // })

    test('debe de mostrar el título en un h1',()=>{
        const title = 'Hola, Soy Antony'
        const { container,getByText, getByTestId } = render(<FirstApp title={title}/>)

        expect( getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe(title)

        expect(getByTestId('test-title')).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toBe(title)

    })

    test('debe de mostrar el subtitulo enviado por props',()=>{
        const subtitle='Soy un subtitulo'
        const title = 'Hola, Soy Antony'
        const { getAllByText} = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        )
        expect(getAllByText(subtitle).length).toBe(1)

    })
})