import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({expenses}) => {
    // 선택된 연도로 재 렌더링 하기 위해 연도를 상태값으로 관리
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const onFilterChange = (filteredYear) => {

        // ExpenseFilter에 있는 선택된 연도 값을 여기서 출력
        console.log('ExpenseList: ', filteredYear);
        setFilteredYear(filteredYear);
    };

    return (
        <div className="expenses">

            <ExpenseFilter onChangeFilter={onFilterChange}/>

            {/*{ convertToComponentArray() }*/}
            {expenses
                .filter(ex => ex.date.getFullYear().toString() === filteredYear)
                .map((ex) => (
                    <ExpenseItem
                        key={Math.random().toString()} // 보통 PK로 넣음
                        title={ex.title}
                        price={ex.price}
                        date={ex.date}/>))}

        </div>
    );
};

export default ExpenseList;