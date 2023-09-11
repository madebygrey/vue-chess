import type { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FiguresNames } from "./Figure";
import blackLogo from '../../assets/img/black-knight.png';
import whiteLogo from '../../assets/img/white-knight.png';

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresNames.KNIGHT;
    }
}