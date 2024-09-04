import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addSquare, removeSquare } from '../../store/slices/squareSlice';
import Square from '../Square/Square';
import '../../styles/styles.css';

const SquareList: React.FC = () => {
    const squares = useSelector((state: RootState) => state.square.squares);
    const dispatch = useDispatch();
    const [removingSquareId, setRemovingSquareId] = useState<string | null>(null);

    const handleAddSquare = () => {
        dispatch(addSquare());
    };

    const handleRemoveLastSquare = () => {
        if (squares.length > 0) {
            const lastSquareId = squares[squares.length - 1].id;
            setRemovingSquareId(lastSquareId);
        }
    };

    const handleRemoveComplete = () => {
        if (removingSquareId) {
            dispatch(removeSquare());
            setRemovingSquareId(null);
        }
    };

    return (
        <div>
            <button onClick={handleAddSquare}>Добавить</button>
            <button onClick={handleRemoveLastSquare}>Удалить</button>
            <div className="square-container">
                {squares.map((square) => (
                    <Square
                        key={square.id}
                        color={square.color}
                        isRemoving={square.id === removingSquareId}
                        onRemoveComplete={handleRemoveComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default SquareList;
