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
    if (!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return dx <= 1 && dy <= 1;
  }
}
