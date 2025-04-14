# Local Storage 🗄

### What is it

Local storage is a storage space in the browser and can store key value pairs of things. Local storage is usually used for storing some data that the site wants to load on the persons machine and have it after closing the window where the web page is. This can be useful for many things, but in our case we can use it for storing data and using it as a substitute for a database. There are some things to mention before we start talking about local storage:

- Local storage can hold 5MB of data
- Local storage can only keep key value pairs of data
- Local storage can only store strings

### Store data in local storage

Now, you might be thinking... How can we store our data when local storage only accepts strings and they must be in a key - value combo? Well we can utilize the power of JSON and with that put whatever we need in local storage even objects and arrays. How? Well let's make an example where we need to store Objects of the Human class in it and see.

1. We create a class Human with properties Name and Age
2. We create an array with humans
3. We use JSON.stringify() on the array
4. We save the string in Local Storage
5. When we want it back we use JSON.parse() to convert it back to array of objects

### Important methods for local storage

- localStorage.setItem("myKey", "myValue") - Adds a record in Local Storage
- localStorage.getItem("myKey") - Gets a record from Local Storage
- localStorage.clear() - Clears the Local Storage

### Example

Here is the Human example in code

```html
Name<input type="text" /> Age<input type="text" />
<button>Send to local storage</button>
<button>Get</button>
```

```javascript
let in1 = document.getElementsByTagName('input')[0];
let in2 = document.getElementsByTagName('input')[1];
let btn1 = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[1];
// We check if there is something in local storage first
let people =
	localStorage.getItem('people') == null
		? []
		: JSON.parse(localStorage.getItem('people'));

class Person {
	constructor(name, age) {
		this.Name = name;
		this.Age = age;
	}
}

// We get from two input fields data, make an object, add it to the array and save the array back in localStorage
btn1.addEventListener('click', function () {
	let person = new Person(in1.value, in2.value);
	people.push(person);
	localStorage.setItem('people', JSON.stringify(people));
	in1.value = '';
	in2.value = '';
});
btn2.addEventListener('click', function () {
	console.log(JSON.parse(localStorage.getItem('people')));
});
```

### Materials

- [What is Local Storage](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)
- [How to use Local Storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)
