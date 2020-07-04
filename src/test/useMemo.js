import React, { useMemo, useState, useCallback } from "react";

export default function UseMemo() {
  const [num, setNum] = useState(0);
  console.log(num);
  const memoizedValue = useMemo(() => {
    console.log(num, "memo");
    return num + 100;
  }, []);
  console.log(memoizedValue);
  console.log(num);

  return (
    <div
      onClick={() => {
        setNum(num + 1);
      }}
    >
      {console.log("render")}
      {memoizedValue}
    </div>
  );
}
