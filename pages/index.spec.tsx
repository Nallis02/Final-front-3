import {render, screen} from "@testing-library/react";
import Index from "./index.page";
import { comicsMock } from "dh-marvel/test/mocks/comics";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index comics={comicsMock}/>)
            const title = screen.getByText('Comics de Marvel')
            expect(title).toBeInTheDocument()
        })
    })

})