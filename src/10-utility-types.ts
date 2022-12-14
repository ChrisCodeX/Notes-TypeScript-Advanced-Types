interface EmployeeInterface {
    name: string,
    lastName: string,
    age: number,
    company: string
}

// Omit
// Permite omitir propiedades a las interfaces
type Person123 = Omit<EmployeeInterface,'company' | 'age'>

const ppp: Person123 = {
    name: 'Christian',
    lastName: 'Espinoza',
}

console.log(ppp);

// Pick
// Permite elegir propiedades de las interfaces
type Person321 = Pick<EmployeeInterface,'name' | 'age'>

const ppp2: Person321 = {
    name: 'Leonardo',
    age: 19
}

console.log(ppp2);


// Partial
// Coloca como opcionales todas las propiedades de una interface
type newPerson1 = Partial<EmployeeInterface>

// Required
// Coloca como obligatorios todas las propiedades de un tipo o interface
type newPerson2 = Required<newPerson1>

// Read only
// Coloca como 'solo lectura' a los propiedades de un tipo o interface
type newPerson3 = Readonly<EmployeeInterface>

// Anidar utility types
// Ejemplo: Las propiedades de la interfaz employee son opcionales y de solo lectura
type newPerson4 = Readonly<Partial<EmployeeInterface>>
