

export default function S1() {
    const S1 =["HTML","Javascrip","Python","C#"];
    return (
        <>
            <h1>DANH SÁCH KHÓA HỌC</h1>
            <ul>
                {S1.map((chu) =>( 
              <li key={chu}>
                <div>{chu}</div>
              </li>
              ))}
            </ul>
        </>
    );

}
