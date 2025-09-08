//Function that takes a string with HTML entities (like &quot; for ", &amp; for &) and creates a temporary <textarea> element Sets its innerHTML to that string, reads back the decoded text from .value, returns the decoded text

export const decodeHTML = (html) => {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
};
