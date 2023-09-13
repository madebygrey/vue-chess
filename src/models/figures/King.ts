import type { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FiguresNames } from "./Figure";
import blackLogo from "../../assets/img/black-king.png";
import whiteLogo from "../../assets/img/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FiguresNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const isVerticalMove =
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      target.x === this.cell.x;
    const isHorizontalMove =
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      target.y === this.cell.y;
    const isLeftDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y - 1);
    const isRightDiagonal =
      (target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y + 1);

    if (
      isVerticalMove ||
      isHorizontalMove ||
      isLeftDiagonal ||
      isRightDiagonal
    ) {
      return true;
    }
    return false;
  }
}
