import javascript

from IfStmt ifStmt ,BLock block
where
  block = ifStmt.getThen() and
  block.getNumStmt = 0
select ifStmt, "Empty if statement"
