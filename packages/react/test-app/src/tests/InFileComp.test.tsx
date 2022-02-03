import { RuxButton } from "@astrouxds/react";
import { render, fireEvent } from "@testing-library/react";

declare interface Props {
  handleClick: React.MouseEventHandler<HTMLRuxButtonElement>;
}

const Comp = (props: Props) => {
  return (
    <div>
      <RuxButton data-testid="btn" onClick={(e) => props.handleClick(e)}>
        Button
      </RuxButton>
    </div>
  );
};

test("Can find and click a rux-button", async () => {
  const mockClick = jest.fn();
  const { getByTestId } = render(<Comp handleClick={mockClick} />);
  let btn = getByTestId("btn");
  expect(btn).not.toBeNull();

  fireEvent.click(btn);
  expect(mockClick).toHaveBeenCalledTimes(1);
});
