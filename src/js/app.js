import "../scss/app.scss";
import * as Ramda from "ramda";
import { pluck } from "ramda";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");

  const getClasses = Ramda.pluck("class");
  const classes = getClasses(arrayToPluck);
  // console.log(classes);

  articles.forEach((a, idx) => a.classList.add(classes[idx]));
});
