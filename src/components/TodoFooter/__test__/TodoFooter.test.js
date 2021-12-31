import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />)
        </BrowserRouter>
    )
}



describe("Todo Footer", () => { //describe is better way to struc

    test('Should render correct num of incomplete tasks', async () => {
        // render(<TodoFooter numberOfIncompleteTasks={5} />); //as is, this will throw error bc Link needs to be inside browser router. in the app, it is, 
        // but pulled here it isnt. need to make a mock wrapper for it
        render(
            <MockTodo numberOfIncompleteTasks={5} />
        )
        const paraElement = screen.getByText(/5 tasks left/i);
        expect(paraElement).toBeInTheDocument();
    });


    it('Should render "task" when num of incomplete tasks is 1', async () => {
        render(<MockTodo numberOfIncompleteTasks={1} />)
        const paraElement = screen.getByText(/1 task left/i);
        expect(paraElement).toBeInTheDocument();
    });

})


// assertions practice:


// it('Should render be visible', async () => {
//     render(<MockTodo numberOfIncompleteTasks={1} />)
//     const paraElement = screen.getByText(/1 task left/i);
//     expect(paraElement).toBeVisible() //is visible to the user
// });

// it('to contain html, p tag', async () => {
//     render(<MockTodo numberOfIncompleteTasks={1} />)
//     const paraElement = screen.getByText(/1 task left/i);
//     expect(paraElement).toContainHTML("p") 
// });

// it('toHaveTextContent', async () => {
//     render(<MockTodo numberOfIncompleteTasks={1} />)
//     const paraElement = screen.getByRole("paragraph"); //this fails bc p tag doesnt have paragraph
//     expect(paraElement).toHaveTextContent("1 task left") 
// });

// // .not
// it('not falsy', async () => {
//     render(<MockTodo numberOfIncompleteTasks={1} />)
//     const paraElement = screen.getByText(/1 task left/i);
//     expect(paraElement).not.toBeFalsy() 
// });

// it('not falsy', async () => {
//     render(<MockTodo numberOfIncompleteTasks={1} />)
//     const paraElement = screen.getByText(/1 task left/i);
//     expect(paraElement.textContent).toBe("1 task left") 
// });
