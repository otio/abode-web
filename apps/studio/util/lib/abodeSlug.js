export default function (input, type) {
  return input.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
}
