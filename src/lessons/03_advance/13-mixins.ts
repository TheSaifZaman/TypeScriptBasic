/**
 * advance/13 - Mixins
 * -------------------
 * A mixin is a function that takes a base class and returns a subclass
 * with extra members - letting you compose behaviour without deep
 * inheritance chains.
 */

// A constructor type any mixin can extend.
type Constructor<T = object> = new (...args: any[]) => T;

// Each mixin adds a slice of behaviour.
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = 0; // pretend timestamp
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false;
    activate(): void {
      this.isActive = true;
    }
  };
}

class User {
  constructor(public name: string) {}
}

// Compose multiple mixins onto the base class.
const SpecialUser = Activatable(Timestamped(User));
const u = new SpecialUser("Ada");
u.activate();

console.log("advance/13:", u.name, u.isActive, u.createdAt);

export {};
