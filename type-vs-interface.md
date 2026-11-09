# **Title : Type aliases vs Interface** 

# **Introduction:** 

**Type:** type is typescript own keyword which is used to declare simple variable/object and which type of data store inside there variable/object. 

**Interface:** interface is typescript own keyword which is mostly used to build class and object structure. 

# **Detailed Body Paragraphs with Code Examples:** 

Interface use for build object structure and class.If multiple interfaces are defined with the same name,they are automatically merged.Interface define that, interface Member {}; interface don’t need to = sign and it is extended using the (extends) keyword. Show the interface code below, 

Interface Drink {brand: string;} 

Interface Drink {name: string;} 

const softDrink: Drink = { brand: “CocaCola”, name:”Medinda”}; 

Type is flexiable campare to interface.Type is not only objects but also other types can be created. Type mostly use if i needed to Tuple, Union (string | number) but one thing remember that type can not handle boolean type. Type define that, type Member = {}; type need to = sign and it needs to be combined with other types using the (&) intersection symbol. 

type User = { name: string; age: number; }; 

type ID = string | number; 

type Employee = User & { employeeId: number; }; 

# **Conclusion:** 

type and interface play a important role in ensuring type safety. It is generally preferable to use interface for defining the structure of objects or as a blueprint for classes as it supports inheritance. One the other hand type is essential when i need to define union types ( | ) or create aliases for primitive types. 

