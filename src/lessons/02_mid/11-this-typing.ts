/**
 * mid/11 - Typing `this`
 * ----------------------
 * Covers: `this` parameters (compile-time only), polymorphic `this`
 * return types for fluent chaining, and `ThisType<T>` for config objects.
 */

// A `this` parameter documents/enforces the calling context. It is erased
// from the emitted JS - it is NOT a real argument.
interface Counter {
  count: number;
  increment(this: Counter): void;
}
const counter: Counter = {
  count: 0,
  increment(this: Counter) {
    this.count++;
  },
};

// Polymorphic `this` - returning `this` keeps the subclass type when chaining.
class QueryBuilder {
  protected parts: string[] = [];
  where(clause: string): this {
    this.parts.push(clause);
    return this;
  }
  build(): string {
    return this.parts.join(" AND");
  }
}
class AdminQuery extends QueryBuilder {
  onlyAdmins(): this {
    return this.where("role = 'admin'");
  }
}
const sql = new AdminQuery().where("active = true").onlyAdmins().build();

// ThisType<T> - sets the type of `this` inside an object's methods.
type ObjectDescriptor<D, M> = {
  data: D;
  methods: M & ThisType<D & M>; // inside methods, `this` is D & M
};
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  return { ...desc.data, ...desc.methods } as D & M;
}
const point = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    move(dx: number, dy: number) {
      this.x += dx; // `this` knows about `x`/`y` from `data`
      this.y += dy;
    },
  },
});
point.move(5, 8);

counter.increment();
console.log("mid/11:", counter.count, sql, point.x, point.y);

export {};
