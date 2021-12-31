// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />); //1
//   const linkElement = screen.getByText(/learn react/i); //2 & 3 (?)
//   expect(linkElement).toBeInTheDocument(); //4
// });

// // test block:
// // 1. Render a comp to test
// //    - use render(<component />)
// // 2. Find elements we want to interact w
// //    - screen.method --> screen looks in the DOM/the component you're rendering. 
// //    - There are a bunch of methods available on screen
// //        -- getbytext here is getting the link
// // 3. Interact w those elements 
// // 4. Assert that the results are as expected

// // screen.method: 
// // - 90% of the time you'll use getBy__
// // - the __AllBy returns an array whether its just 1 r multiple that are found
// // theyre all diff, but highlights include:
// //      - findBy & findAllBy work w async functs (not sure if this means inside the test bock or includes async funcs in the app)
// //      - QueryBy & queryAllBy dont throw error if nothing is found, unlike all the other ones
// //      - 1+ match for the getBy, findBy, ueryBy throws error
// //      - to the end of the method, you can search by placeholderTex, Role, TestId, and TONS else

// // To test the components, create __test__ folder for ea of the components and then file w ComponentName.test.js
// you want to test in a similar way to how the user will use it! getByTestId is LAST method to use. You want to start w getByRole, getByLabelText,
// getByPlaceholderText, getByText