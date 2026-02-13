-- transaction logs

SELECT * FROM Transactions 
WHERE userID = 110 AND TransactionType = “CASH_WITHDRAWAL”
ORDER BY Timestamp DESC ; 
