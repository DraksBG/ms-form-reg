import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactDetail from "./ContactDetail";
import { ContactDetailsContext } from "../../context/ContactsDetailsContext";
import { IContactDetailsContextProps } from "../../context/ContextTpes.type";

describe("ContactDetail", () => {
    it("renders inital component", () => {
        render(<ContactDetail />);
        screen.getByText(/one last thing/i);
    });

    it("renders the correct text", () => {
        render(<ContactDetail />);
        expect(
            screen.getByText(/resident of the Republic of Ireland/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/I confirm that/i)).toBeInTheDocument();
        expect(
            screen.getByText(/I am leagal resident of republic of Ireland/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/I am over 18 years of age/i)
        ).toBeInTheDocument();
    });

    it("renders the correct input", () => {
        render(<ContactDetail />);
        expect(screen.getByTestId(/confirmation/i)).toBeInTheDocument();
    });

    it("renders the correct button", () => {
        render(<ContactDetail />);
        expect(screen.getByText(/continue/i)).toBeInTheDocument();
    });

    it("input can be clicked", () => {
        const onChange = jest.fn();
        const mockStore: IContactDetailsContextProps = {
            isAgreedToTerms: true,
            onChange,
        };

        render(
            <ContactDetailsContext.Provider value={mockStore}>
                <ContactDetail />
            </ContactDetailsContext.Provider>
        );
        const input = screen.getByTestId(/confirmation/i);
        expect(input).toBeInTheDocument();
        expect(input).toBeEnabled();
        expect(input).toBeChecked();
    });

    it("button can be clicked", () => {
        const onChange = jest.fn();
        const mockStore: IContactDetailsContextProps = {
            isAgreedToTerms: true,
            onChange,
        };

        render(
            <ContactDetailsContext.Provider value={mockStore}>
                <ContactDetail />
            </ContactDetailsContext.Provider>
        );
        const button = screen.getByText(/continue/i);

        expect(button).toBeEnabled();
        fireEvent.click(button);
    });
});
