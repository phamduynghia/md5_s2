import ManagerItem from './ManagerItem'

export default function ListManager() {
    const users = [
        {
            id: 1,
            name: 'Daniel Kristeen',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '15 Mar 1988',
        },
        {
            id: 2,
            name: 'Emma Smith',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '15 Mar 1855',
        },
        {
            id: 3,
            name: 'Olivia Johnson',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '17 Aug 1988',
        },
        {
            id: 4,
            name: 'Isabella Williams',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '26 Mar 1999',
        },
        {
            id: 5,
            name: 'Sophia Jones',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '16 Aug 2001',
        },
        {
            id: 6,
            name: 'Charlotte Brown',
            age: 'Visual Designer',
            email:'daniel@website.com',
            dataofbirth: '15 Mar 1988',
        },
    ]
  return (
    <>
    {users.map((item) => (
        <ManagerItem key={item.id} item={item} />
    ))}
</>
   )
}
