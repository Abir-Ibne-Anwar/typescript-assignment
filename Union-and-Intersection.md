**Title : Union and Intersection** 

**Introduction:** 

**Union:** When we declare a variable it could be any one of several possible types like number, string. It’s symble ( | ). 

**Intersection:** When we declare a variable and creates a new type by combining multiple types together. It’s symble ( & ). 

# **Detailed Body Paragraphs with Code Examples:** 

**Union:** We used union types when a variable, function parameter, or object field can accept multiple types of data. Because user input any type of valriable value. Also we can create custom type. It’s easier for user. Here is the code: 

type ID = string | number; 

let userId: ID; 

userId = 101; 

userId = "USER-101"; 

**Intersection:** We used intersection types when i need a type that combines all the properties from multiple types or objects. Because it can happens user need to having the characteristics of both. Here is the code: 

type User = { name: string; }; type AdminPermissions = { canApprovePost: boolean; }; 

type Admin = User & AdminPermissions; const systemAdmin: Admin = { 

name: "Abir", 

canApprovePost: true 

}; 

# **Conclusion:** 

Union (|) and Intersection (&) types are used to make code more flexible and secure. A Union allows for selecting one type from several possibilities, while an Intersection combines the characteristics of multiple types. 

