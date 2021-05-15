let test = "{}(())[]{}";

const balancedBrackets = (str) => {
  const opening = "[{(";
  const closing = "})]";
  const matched = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const stack = [];

  for (let el of str) {
    if (opening.includes(el)) {
      stack.push(el);
    } else if (closing.includes(el)) {
      if (stack.length - 1 === 0) return false;
      if (stack[stack.length - 1] === matched[el]) stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};
