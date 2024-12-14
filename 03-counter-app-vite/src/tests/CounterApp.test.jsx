import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../CounterApp.jsx";

describe('Pruebas para Counter App',()=>{
    const value = 100
    test('debe de hacer match con el snapshot', ()=>{
        const {container} = render(<CounterApp/>)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el valor inicial de 100',()=>{
        render(<CounterApp value={100}/>)
        expect(screen.getByText(value)).toBeTruthy()
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
    })

    test('debe de incrementar con el boton +1',()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain((value+1).toString())
    })

    test('debe de decrementar con el boton -1',()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain((value-1).toString())
    })

    test('debe de resetear con el boton Reset',()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain((value+1).toString())
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(value.toString())

    })

    test('debe de funcionar el boton Reset',()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain((value+1).toString())
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(value.toString())

    })
})