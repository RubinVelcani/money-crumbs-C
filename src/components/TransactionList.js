import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, i) => (<Transaction transaction={transaction} key={transaction._id}/>))}
      </ul>
    </div>
  )
}

export default TransactionList