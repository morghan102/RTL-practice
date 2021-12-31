import { render, screen } from '@testing-library/react';
import Header from '../Header';


// GET BY
test('Should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i); //2 & 3 (?)
    expect(headingElement).toBeInTheDocument(); //4
});

// it('', () => {
//     render(<Header title="My Header" />);
//     // const headingElement = screen.getByRole("heading"); works like that, but what if we had another h3?
//     const headingElement = screen.getByRole("heading", {name: "My Header"}); 
//     expect(headingElement).toBeInTheDocument(); 
// })

// it('', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("header"); 
//     expect(headingElement).toBeInTheDocument(); 
// })

// it('', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId("header1"); 
//     expect(headingElement).toBeInTheDocument(); 
// })

// // FIND BY
// it('finds by text', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i); //expects to be async, so add async await
//     expect(headingElement).toBeInTheDocument(); 
// })

// // QUERY BY
// it('queries by text', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.queryByText(/dog/i); //expects to be async, so add async await
//     expect(headingElement).not.toBeInTheDocument();  //.not !
// })

// // GET ALL BY
// it('gets all by role', async () => {
//     render(<Header title="My Header" />);
//     const headingElements = await screen.getAllByRole("heading"); //expects to be async, so add async await
//     expect(headingElements.length).toBe(2);  //bc it returns an array
// })