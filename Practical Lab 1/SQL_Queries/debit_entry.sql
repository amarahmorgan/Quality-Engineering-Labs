 
-- Debit entries

SELECT * FROM Ledger ;
WHERE userID = 110 AND EntryType = “DEBIT”;
ORDER BY Timestamp DESC ; 
