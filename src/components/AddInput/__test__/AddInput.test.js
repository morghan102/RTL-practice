import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';


const mockSetTodo = jest.fn() //this is a mock function

describe("AddInput", () => {
    it('should render input element', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputEle).toBeInTheDocument();
    });

    // FIRE EVENT
    it('should able to type into input', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputEle, { target: { value: "Go grocery shopping" } }) //thing yu want to change, how change
        expect(inputEle.value).toBe("Go grocery shopping" );
    });

    it('should have empty input when btn clicked', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />)
        const inputEle = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonEle = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputEle, { target: { value: "Go grocery shopping" } }) 
        fireEvent.click(buttonEle)
        expect(inputEle.value).toBe("" );
    });
})