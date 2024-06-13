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

    // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponentArray = () => {
    //
    //     const mappedArray = expenses.map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
    //
    //     return mappedArray;


    // const newArray = [];
    // for (const ex of expenses) {
    //     const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
    //     newArray.push(tag);
    // }
    // return newArray;
    // };

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

            {/*<ExpenseItem*/}
            {/*    title={expenses[0].title}*/}
            {/*    price={expenses[0].price}*/}
            {/*    date={expenses[0].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title={expenses[1].title}*/}
            {/*    price={expenses[1].price}*/}
            {/*    date={expenses[1].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title={expenses[2].title}*/}
            {/*    price={expenses[2].price}*/}
            {/*    date={expenses[2].date}*/}
            {/*/>*/}

        </div>
    );
};

export default ExpenseList;