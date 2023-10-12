import { expect, it, describe } from 'vitest';
import { questions } from '../lib/alternativ1';
import Wow from '../components/Wow';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Quiz questions", () => {

    it("is it an array?", () => {
        expect(Array.isArray(questions)).toBe(true)
    });

    
    it('Answer should be index 1. Hva er det kjemiske symbolet for gull?', () => {
        expect(questions[0].answers[0].correct).not.toBe(true)
        expect(questions[0].answers[1].correct).toBe(true);
        expect(questions[0].answers[2].correct).not.toBe(true)
        expect(questions[0].answers[3].correct).not.toBe(true)
    });
});

describe.skip("Test if test works", () => {
    it('should be able to run tests', () => {
        expect(1 === 1).toBe(true);
        expect(1 === 1).not.toBe(false);
    });
})

describe.only("Component testing", () => {
    it("Should render title", () => {
      render(<Wow enVariabel={12} />);
      const titleElement = screen.getByText("Tittle");
      expect(titleElement).toBeTruthy();
    });

    it("Should render element with prop", () => {
        render(<Wow enVariabel={12} />);        
        const countElement = screen.getByText('Klikk her "12"');
        expect(countElement).toBeTruthy();
      });

    it("Should get the number 12 from prop", () => {
        render(<Wow enVariabel={12} />);        
        const countElement = screen.getByText('Klikk her "12"');
        const number = countElement.innerHTML.split('"')
        expect(parseInt(number[1] + number[2])).toBe(12);
    });

    test('Should increase count', () => {
        render(<Wow enVariabel={12} />);
        const incrementButton = screen.getByText('Increment');
        let count = screen.getByText('Klikket: 0');
        expect(count).toBeTruthy();
        fireEvent.click(incrementButton);
        let newcount = screen.getByText('Klikket: 1');
        expect(newcount).toBeTruthy();
      });
  });