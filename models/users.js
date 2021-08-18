const users = [];

const addUser = ({id, name, room})=>{
    //trimroom
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Check if there is already a user and create a new user with that details
    const existingUser = users.find((user)=>user.rom ===room && user.name ===name);
    if (existingUser) {
        return {error: 'Username is taken'}
    }

    const user = {id, name, room};
    users.push(user)

    return {user}
   
}
const removeUser = (id)=>{
 const index = users.findIndex(user=>user.id===id)
 if (index!== -1) {
     return users.slice(index, 1) [0]
 }
}
const getUser = (id)=>{
    return (users.find(user=>user.id===id));
}
const getUserInRoom = (room)=>{
    return(users.filter(user=>user.room===room));
}

module.exports = {addUser, removeUser, getUser, getUserInRoom};