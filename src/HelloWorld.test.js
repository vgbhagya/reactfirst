import HelloWorld from "./HelloWorld";
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Hello World',()=>{
    test('Component should load',()=>{
        const message ="hello";
        render(<HelloWorld message={message}/>);
        expect(screen,getByTestId('message')).toHaveTextContent(message)
    })
    test('component click event should work',()=>{
        const message="hello";
        render(<HelloWorld message={message}/>);
        const element =screen.getByTestId('click');

        userEvent.click(element);
        expect(element.toHaveTextContent("yes"))

    })
})