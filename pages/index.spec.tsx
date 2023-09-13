import {render, screen} from "@testing-library/react";
import Index from "./index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index/>)
            const title = screen.getByText('Sample')
            expect(title).toBeInTheDocument()
        })
    })

})