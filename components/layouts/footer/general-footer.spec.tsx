import { render, screen } from '@testing-library/react'
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";

describe('GeneralFooter', () => {
    describe('when rendering default layout', () => {
        it('should render the powered by text', () => {
            render(<GeneralFooter />)
            const poweredBy = screen.getByText('By')
            expect(poweredBy).toBeInTheDocument()
        })
        it("debe tener el enlace a LinkedIn con el enlace correcto", () => {
            const { getByText } = render(<GeneralFooter />);
            const linkedInLink = getByText("Nallive Trujillo").closest("a");
        
            expect(linkedInLink).toHaveAttribute(
              "href",
              "https://www.linkedin.com/in/lida-nallive-trujillo-mu%C3%B1oz-803aa7200/"
            );
            expect(linkedInLink).toHaveAttribute("target", "_blank");
            expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
          });
    })
})