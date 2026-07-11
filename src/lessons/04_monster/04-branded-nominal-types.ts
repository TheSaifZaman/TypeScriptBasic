/**
 * monster/04 - Branded (Nominal) Types
 * ------------------------------------
 * TypeScript is structural: two types with the same shape are
 * interchangeable. "Branding" simulates NOMINAL typing so that, e.g.,
 * a UserId can never be passed where an OrderId is expected.
 */

// A brand attaches an invisible, unique tag to a base type.
type Brand<T, B extends string> = T & { readonly __brand: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

// Smart constructors are the only place the assertion lives.
function toUserId(id: string): UserId {
  return id as UserId;
}

function fetchUser(id: UserId): string {
  return `user:${id}`;
}

const uid = toUserId("u_123");
fetchUser(uid); //
// fetchUser("u_123");          // plain string is not a UserId
// const bad: OrderId = uid;    // UserId and OrderId are distinct

// Branding also works for units of measurement
type Meters = Brand<number, "Meters">;
type Seconds = Brand<number, "Seconds">;
const speed = (5 as Meters) / (2 as Seconds); // you control which ops are allowed

console.log("monster/04:", fetchUser(uid), speed);

export {};
