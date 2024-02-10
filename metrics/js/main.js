/// Работа с классами
/// 1.
// elem.classList.add("www");
/// 2.
// elem.classList.remove("www");
/// 3.
// let has_class = elem.classList.contains("www");
/// 4.
// if (has_class) {
//     elem.classList.remove('www');
// } else {
//     elem.classList.add("www");
// }
/// 5.
// let count = elem.classList.length;
/// 6.
// for (let i = 0; i < count; i++) {
//     alert(elem.classList[i])
// }
//
/// Работа с CSS
//
// elem.style.cssText = "color: red; font-size: 30px; border: 1px solid black;"
//
/// Свойство tagName
//
/// 1.
// elem.addEventListener("click", function() {
//     alert(elem.tagName);
// });
//
/// 2.
//
// elem.addEventListener("click", function() {
//     alert(elem.tagName.toLowerCase);
// });
//
/// 3.
// let elems = document.querySelector('.www');
// elems.forEach(function(element) {
//     let tagName = element.tagName.toLowerCase();
//     element.textContent += " (" + tagName + ")";
// });
//
///Вставка элементов через appendChild
//
/// 1.
// let ol = document.querySelector("ol");
// let li = document.createElement("li");
// li.textContent = "пункт";
// ol.appendChild(li);
/// 2.
// items.forEach(function(itemText) {
//     let li = document.createElement("li");
//     li.textContent = itemText;
//     ul.appendChild(li);
// });
//
/// Вставка элементов через insertAdjacentHTML
//
/// 1.
// elem.insertAdjacentHTML("beforebegin", "<span>!!!</span>");
//
/// 2.
// elem.insertAdjacentHTML("afterEnd", "<span>!!!</span>");
//
/// 3.
// elem.insertAdjacentHTML("afterBegin", "<span>!!!</span>");
//
/// 4.
// elem.insertAdjacentHTML("beforeend", "<span>!!!</span>");
//
/// Удаление и клонирование
/// 1.
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let button = document.querySelector("#deleteButton");
//
// button.addEventListener("click", function() {
//     parent.removeChild(child);
// });
/// 2.
// let ol = document.querySelector("ol");
//
// button.addEventListener("click", function() {
//     let lastChild = ol.lastElementChild;
//     if (lastChild) {
//         ol.removeChild(lastChild);
//     }
// });
//
/// 3.
// elem.addEventListener("click", function() {
//     elem.parentNode.removeChild(elem);
// });
//
/// 4.
//
// ol.addEventListener("click", function(event) {
//     let target = event.target;
//     if (target.tagName === "li") {
//         ol.removeChild(target);
//     }
// });
//
/// 5. 
// let input = document.querySelector("input");
// let btn = document.querySelector("#Button");
//
// button.addEventListener("click", function() {
//     let result = input.cloneNode(true);
//     input.parentNode.appendChild(result);
// });
//
// Потомки
// 1.
// let first_child = elem.firstElementChild;
// if (first_child) {
//     first_child.style.color = "red";
// }
//
/// 2.
// let last_child = elem.lastElementChild;
// if (first_child) {
//     first_child.style.color = "red";
// }
//
/// 3.
//
// let all_child = elem.children
//
// for (let i = 0; i < all_child.length; i++) {
//     all_child[i].textContent += '!';
// }
//
/// Соседи
//
/// 1.
//
// let up = elem.previousElementSibling;
// if (up) {
//     up.textContent += '!';
// }
//
/// 2.
//
// let down = elem.nextElementSibling;
// if (down) {
//     down.textContent += '!';
// }
//
/// 3.
//
// let next_neighbor = elem.nextElementSibling;
// if (next_neighbor) {
//     let next_next_neighbor = next_neighbor.nextElementSibling;
//     if (next_next_neighbor) {
//         next_next_neighbor.textContent += '!';
//     }
// }
//
/// Родители
//
/// 1.
//
// let parent = elem.parentElement;
// if (parent) {
//     parent.style.color = "red";
// }
//
/// 2.
//
// let parents_parent = elem.parentElement.parentElement;
// if (parents_parent) {
//     parents_parent.style.color = "red";
// }
//
/// На величину границы
//
/// 1.
//
// let button = document.querySelector("#button");
//
// button.addEventListener("click", function() {
//     let border_top = elem.clientTop;
//     alert(border_top);
// });
//
/// 2
// button.addEventListener("click", function() {
//     let border_left = elem.clientLeft;
//     alert(border_left);
// });
//
/// На полный размер элемента
//
/// 1
// button.addEventListener("click", function() {
//     let width = elem.offsetWidth;
//     alert(width);
// });
//
/// 2.
// button.addEventListener("click", function() {
//     let height = elem.offsetHeight;
//     alert(height);
// });
//
///На размер элемента без границ, но с padding
//
/// 1.
// button.addEventListener("click", function() {
//     let width = elem.clientWidth;
//     alert(width);
// });
//
/// 2.
// button.addEventListener("click", function() {
//     let height = elem.clientHeight;
//     alert(height);
// });
//
/// Работа с getComputedStyle
//
/// 1.
// let computed_style = getComputedStyle(elem);
// let width = parseInt(computed_style.width);
// let height = parseInt(computed_style.height);
//
// alert("Ширина: " + width + "Высота: " + height);
//
/// Прокрутка элемента
//
/// 1.
// button.addEventListener("click", function() {
//     let scroll_top = elem.scrollTop;
//     alert(scroll_top);
// });
//
/// 2.
// button.addEventListener("click", function() {
//     let scroll_left = elem.scrollLeft;
//     alert(scroll_left);
// });
//
// // 3.
// button.addEventListener("click", function() {
//     elem.scrollTop = 100;
// });
//
/// 4.
// button.addEventListener("click", function() {
//     elem.scrollTop += 100;
// });
//
/// Прокрутка элемента
//
/// 1.
// button.addEventListener("click", function() {
//     let scroll_height = elem.scrollHeight;
//     alert(scroll_height);
// });
//
/// 2.
// button.addEventListener("click", function() {
//     let scroll_width = elem.scrollWidth;
//     alert(scroll_width);
// });
//
/// 3.
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollHeight - 100;
// });
//
/// Прокрутка страницы
//
/// 1.
//
// let vertical_btn = document.querySelector("#verticalbtn");
// let horizontal_btn = document.querySelector("#horizontalbtn");
//
// vertical_btn.addEventListener("click", function() {
//     let scroll_top = window.pageYOffset || document.documentElement.scrollTop;
//     alert(scroll_top);
// });
//
/// 2.
// horizontal_btn.addEventListener("click", function() {
//     let scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
//     alert(scroll_left);
// });
//
/// Прокрутка страницы
//
/// 1.
// let button_scroll = document.querySelector("#buttonScroll");
//
// button_scroll.addEventListener("click", function() {
//     window.scrollTo(300, 500);
// });
//
/// 2.
// let scroll_down_btn = document.querySelector("#scrollDownBtn");
//
// scroll_down_btn.addEventListener("click", function() {
//     window.scrollBy(0, 300);
// });
//
/// Практика
//
/// 1.
// let lower_btn = document.querySelector("#lowerBtn");
//
// lower_btn.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// });
//
/// 2.
// let btn = document.querySelector("#btn");
//
// btn.addEventListener("click", function() {
//     window.scrollBy(0, 400);
// });
//
/// 3.
//
// let check_btn = document.querySelector("#checkBtn");
//
// check_btn.addEventListener("click", function() {
//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
//         window.scrollTo(0, 100);
//     }
// });
//
/// 4.
// elem.addEventListener("click", function() {
//     elem.style.width = (parseFloat(getComputedStyle(elem).width) * 2);
//     elem.style.height = (parseFloat(getComputedStyle(elem).height) * 2);
// });