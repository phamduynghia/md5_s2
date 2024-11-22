// phạm vi import các thư viện , file , hàm ,... <bắt đầu>
import React from 'react'
//  phạm vi inport các thư viện , file , hàm ,... <kết thúc>
export default function header() {
// phạm vi viết code js <bắt đầu>
const userName = "nguyen van a";
const age = 21;
// phạm vi viết code js <kết thúc>

// là nơi trả về các đoạn mã JSX
  return (
    <React.Fragment>
    <header style={{color : "red",background: "green"}}>
        header Component
    </header>
    <h3>UserName:{userName}</h3>
<h3>Age:{age}</h3>
    </React.Fragment>
  );
}
