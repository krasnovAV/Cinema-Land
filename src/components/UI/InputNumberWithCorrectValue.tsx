import React, {FC} from 'react';

type propsType = {
    startRange: number;
    endRange: number;
    currentValue: number;
    changeValue: (num: number) => void;
}

export const InputNumberWithCorrectValue: FC<propsType> = ({changeValue, startRange, endRange, currentValue}) => {
    return (
        <input type="number" value={currentValue}
               onChange={e => {
                   +e.target.value < startRange
                       ? changeValue(startRange)
                       : +e.target.value > endRange
                           ? changeValue(endRange)
                           : changeValue(+e.target.value)
               }}/>
    );
};

