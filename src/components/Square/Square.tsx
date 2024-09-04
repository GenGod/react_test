import React, { useEffect, useState } from 'react';
import '../../styles/styles.css';

interface SquareProps {
    color: string;
    isRemoving: boolean;
    onRemoveComplete: () => void;
}

const Square: React.FC<SquareProps> = ({ color, isRemoving, onRemoveComplete }) => {
    const [isAnimating, setIsAnimating] = useState(isRemoving);

    useEffect(() => {
        if (isRemoving) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                onRemoveComplete();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isRemoving, onRemoveComplete]);

    return (
        <div
            className={`square ${isAnimating ? 'remove' : ''}`}
            style={{ backgroundColor: color }}
        ></div>
    );
};

export default Square;
