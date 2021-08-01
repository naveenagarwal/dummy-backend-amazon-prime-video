class A {
  constructor(){};

  x() {
    console.log("a ka x");
  }
}

class B {
  constructor(){};

  x() {
    console.log("b ka x");
  }
}

class C extends A, B {
  constructor(){};
}

c = new C()
c.x()
