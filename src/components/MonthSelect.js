import React from 'react';
// import moment from 'moment';

export default function({ month = 1, onChange = () => {} }) {
    return (
        <select value={month} onChange={event => onChange(event.target.value)}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
    );
}

// Alternative solution using moment
// However, the first is much easier to read so I would keep it as it is.
// At least until it needs advanced features like e.g. internationalization

// export default function({ month = 1, onChange = () => {} }) {
//     const monthOptions = moment
//         .months()
//         .map((monthName, index) => (
//             <option value={index + 1}>{monthName}</option>
//         ));
//     return (
//         <select value={month} onChange={event => onChange(event.target.value)}>
//             {monthOptions}
//         </select>
//     );
// }
