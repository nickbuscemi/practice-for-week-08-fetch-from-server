export function getAllDogs() {
    // Your code here
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2')
}

export function postNewDog() {
    // Your code here
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            name: "Fido",
            age: "4"
        })
    };
    return fetch("/dogs", options);
}

export function postNewDogV2(name, age) {
     // Your code here
     const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            name: name,
            age: age
        })
    };
    return fetch("/dogs", options);
}

export function deleteDog(id) {
      // Your code here
      
      const options = {
        method: "POST",
        headers: { "AUTH": "ckyut5wau0000jyv5bsrud90y" }
      };
      return fetch(`/dogs/${id}/delete`, options)
}