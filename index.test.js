const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  it("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {
    // ✨ test away
    const input = { name: "dart  ", car: "   Altima " };
    const expected = { name: "dart", car: "Altima" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toEqual(input);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  it("[3] returns an object with the properties trimmed", () => {
    // ✨ test away
    const input = { name: "dart  ", car: "   Altima " };
    const expected = { name: "dart", car: "Altima" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[4] the object returned is the exact same one we passed in", () => {
    // ✨ test away
    const input = { name: "dart  ", car: "   Altima " };
    const expected = { name: "dart", car: "Altima" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toEqual(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    // ✨ test away
    const input = [1, 62, 6, 15, 3];
    const expected = 62;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    // ✨ test away
    const first = counter.countDown();
    expect(first).toBe(3);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    // ✨ test away
    const first = counter.countDown();
    const second = counter.countDown();
    expect(second).toBe(2);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    // ✨ test away
    const first = counter.countDown();
    const second = counter.countDown();
    const third = counter.countDown();
    const fourth = counter.countDown();
    const fifth = counter.countDown();
    expect(fifth).not.toBeLessThan(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    const first = seasons.next();
    expect(first).toBe("summer");
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    expect(second).toBe("fall");
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    const first = seasons.next();
    const second = seasons.next();
    const third = seasons.next();
    expect(third).toBe("winter");
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    let newSeason;
    for (let i = 0; i < 4; i++) {
      newSeason = seasons.next();
    }
    expect(newSeason).toBe("spring");
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    let newSeason;
    for (let i = 0; i < 5; i++) {
      newSeason = seasons.next();
    }
    expect(newSeason).toBe("summer");
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    let newSeason;
    for (let i = 0; i < 40; i++) {
      newSeason = seasons.next();
    }
    expect(newSeason).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    // ✨ test away
    const first = focus.drive(100);
    const second = focus.drive(100);
    expect(focus.odometer).toBe(200);
  });
  it("[16] driving the car uses gas", () => {
    // ✨ test away
    focus.drive(300);
    expect(focus.tank).toBe(10);
  });
  it("[17] refueling allows to keep driving", () => {
    // ✨ test away
    focus.drive(600);
    expect(focus.odometer).toBe(600);
    expect(focus.tank).toBe(0);
    focus.refuel(20);
    expect(focus.tank).toBe(20);
    focus.drive(100);
    expect(focus.odometer).toBe(700);
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    // ✨ test away
    focus.refuel(200);
    expect(focus.tank).toBe(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", async () => {
    // ✨ test away
    const test = await utils.isEvenNumberAsync(2);
    expect(test).toBeTruthy();
  });
  it("[20] resolves false if passed an odd number", async () => {
    // ✨ test away
    const test = await utils.isEvenNumberAsync(3);
    expect(test).toBeFalsy();
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
    return utils
      .isEvenNumberAsync("hello")
      .catch((e) => expect(e.message).toBe("number must be a number"));
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
    return utils
      .isEvenNumberAsync("hello")
      .catch((e) => expect(e.message).toBe("number must be a number"));
  });
});
