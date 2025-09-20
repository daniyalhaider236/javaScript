/*
 Stack and Heap are two type of memories,

 Stack memory is used for primitive datatypes (number, string, boolean, null e.t.c)
 Heap memory is used for reference datatypes (array, object, functions)


 */

 let FriendName = "Habibullah"
 let AnotherFriend = FriendName
 AnotherFriend = "Ali"

//  console.log(FriendName);
 
//  console.log(AnotherFriend);


 let user1 = {
    email :"dani@google.com",
    id:27
}

let user2 = user1

user2.email = "gorsi78@google.com"

console.log(user1);
console.log(user2);

/*

while making changes in stack (talking about primitive datatypes), we get the copy of the original 
one. therefore, variable value changes. 

while for heap(reference type) while making changes, both variables refer to the original object.
no copy. hence, the changes do not occur.....

*/





 