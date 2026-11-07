function ClassDec(target: Function) {
  console.log("classDecorator called");
}

@ClassDec
class MyClass {
  constructor() {
    console.log("MyClass instance created");
  }
}
