// ContactForm.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

// Mock the emailjs.sendForm to avoid actual HTTP requests
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve()),
}));

describe("<ContactForm />", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    expect(getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(getByPlaceholderText("name@example.com")).toBeInTheDocument();
    expect(getByPlaceholderText("Message")).toBeInTheDocument();
    expect(getByText("Send Now")).toBeInTheDocument();
  });

  it("handles form input changes", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    const nameInput = getByPlaceholderText("John Doe");
    const emailInput = getByPlaceholderText("name@example.com");
    const messageInput = getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput.value).toBe("john@example.com");

    fireEvent.change(messageInput, { target: { value: "Hello, World!" } });
    expect(messageInput.value).toBe("Hello, World!");
  });

  // create a test suite for successful and failed emailSend

  // it("submits the form successfully", async () => {
  //   const { getByPlaceholderText, getByText, findByText } = render(
  //     <ContactForm />,
  //   );
  //   const nameInput = getByPlaceholderText("John Doe");
  //   const emailInput = getByPlaceholderText("name@example.com");
  //   const messageInput = getByPlaceholderText("Message");
  //   const sendButton = getByText("Send Now");

  //   fireEvent.change(nameInput, { target: { value: "John Doe" } });
  //   fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  //   fireEvent.change(messageInput, { target: { value: "Hello, World!" } });

  //   fireEvent.click(sendButton);

  //   await waitFor(() => {
  //     expect(emailjs.sendForm).toHaveBeenCalled();
  //   });
  //   const successAlert = getByText("Email successfully sent.");
  //   expect(successAlert).toBeInTheDocument();
  // });
});
