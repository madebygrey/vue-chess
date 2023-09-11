import type { Colors } from "../Colors";
import logo from '../../assets/img/black-king.png'
import type { Cell } from "../Cell";

export enum FiguresNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон'
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FiguresNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FiguresNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell) : boolean {
        return true;
    }
    moveFigure(target: Cell):  {

    }
}
